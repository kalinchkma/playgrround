#include <napi.h>
#include <string>
#include <unordered_map>
#include <vector>

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
    tempGroups.reserve(10); // Estimate number of groups (e.g., dealer, address, etc.)

    for (uint32_t i = 0; i < length; i++) {
        Napi::Value item = inputArray.Get(i);
        if (!item.IsObject()) continue;

        Napi::Object inputObj = item.As<Napi::Object>();
        napi_value props;
        napi_get_property_names(env, inputObj, &props);
        Napi::Array propertyNames = Napi::Array(env, props);
        uint32_t propLength = propertyNames.Length();

        for (uint32_t j = 0; j < propLength; j++) {
            Napi::Value keyVal = propertyNames.Get(j);
            if (!keyVal.IsString()) continue;

            std::string keyStr;
            napi_status status = napi_get_value_string_utf8(env, keyVal, nullptr, 0, nullptr);
            if (status != napi_ok) continue;
            size_t keyLen;
            status = napi_get_value_string_utf8(env, keyVal, nullptr, 0, &keyLen);
            if (status != napi_ok) continue;
            keyStr.resize(keyLen);
            status = napi_get_value_string_utf8(env, keyVal, &keyStr[0], keyLen + 1, nullptr);
            if (status != napi_ok) continue;

            size_t underscorePos = keyStr.find('_');
            if (underscorePos == std::string::npos) continue;

            std::string groupKey = keyStr.substr(0, underscorePos);
            std::string propKey = keyStr.substr(underscorePos + 1);

            tempGroups[groupKey].emplace_back(propKey, inputObj.Get(keyStr));
        }
    }

    // Construct output in one pass
    for (auto& pair : tempGroups) {
        Napi::Object groupObj = Napi::Object::New(env);
        auto& props = pair.second;
        props.reserve(props.size());
        for (const auto& prop : props) {
            groupObj.Set(prop.first, prop.second);
        }
        outputObj.Set(pair.first, groupObj);
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