#include <napi.h>
#include <string>
#include <unordered_map>
#include <vector>
#include <array>

Napi::Object DecorateObjects(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() < 1 || !info[0].IsArray()) {
        Napi::TypeError::New(env, "Expected an array as the first argument").ThrowAsJavaScriptException();
        return Napi::Object::New(env);
    }

    Napi::Array inputArray = info[0].As<Napi::Array>();
    uint32_t length = inputArray.Length();

    // Pre-allocate output and temporary storage
    Napi::Object outputObj = Napi::Object::New(env);
    std::unordered_map<std::string, std::vector<std::pair<std::string, Napi::Value>>> tempGroups;
    tempGroups.reserve(10); // Estimated number of groups
    constexpr size_t maxKeyLength = 64; // Max length for group/prop keys
    std::array<char, maxKeyLength> keyBuffer;

    for (uint32_t i = 0; i < length; i++) {
        Napi::Value item = inputArray.Get(i);
        if (!item.IsObject()) continue;

        Napi::Object inputObj = item.As<Napi::Object>();
        napi_value props;
        napi_get_property_names(env, inputObj, &props);
        Napi::Array propertyNames = Napi::Array(env, props);
        uint32_t propLength = propertyNames.Length();

        // Pre-allocate vector for properties
        for (uint32_t j = 0; j < propLength; j++) {
            Napi::Value keyVal = propertyNames.Get(j);
            if (!keyVal.IsString()) continue;

            size_t written;
            napi_status status = napi_get_value_string_utf8(env, keyVal, keyBuffer.data(), maxKeyLength, &written);
            if (status != napi_ok || written >= maxKeyLength) continue;

            std::string keyStr(keyBuffer.data(), written);
            size_t underscorePos = keyStr.find('_');
            if (underscorePos == std::string::npos) continue;

            std::string groupKey = keyStr.substr(0, underscorePos);
            std::string propKey = keyStr.substr(underscorePos + 1);

            auto& group = tempGroups[groupKey];
            if (group.empty()) {
                group.reserve(propLength); // Reserve space for properties
            }
            group.emplace_back(propKey, inputObj.Get(keyVal));
        }
    }

    // Construct output in one pass
    for (auto& pair : tempGroups) {
        Napi::Object groupObj = Napi::Object::New(env);
        for (const auto& prop : pair.second) {
            napi_set_property(env, groupObj, Napi::String::New(env, prop.first), prop.second);
        }
        napi_set_property(env, outputObj, Napi::String::New(env, pair.first), groupObj);
    }

    return outputObj;
}


Napi::String MyMethod(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    std::string input;
    if (info.Length() > 0 && info[0].IsString()) {
        input = info[0].As<Napi::String>().Utf8Value();
    } else {
        input = "World";
    }
    std::string result = "Hello, " + input + " from C++!";
    return Napi::String::New(env, result);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("decorateObjects", Napi::Function::New(env, DecorateObjects));
    exports.Set("myMethod", Napi::Function::New(env, MyMethod));
    return exports;
}

NODE_API_MODULE(addon, Init)