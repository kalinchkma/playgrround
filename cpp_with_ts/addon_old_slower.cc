#include <napi.h>
#include <string>
#include <map>


Napi::Object DecorateObjects(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() < 1 || !info[0].IsArray()) {
        Napi::TypeError::New(env, "Expected an array as the first argument").ThrowAsJavaScriptException();
        return Napi::Object::New(env);
    }

    Napi::Array inputArray = info[0].As<Napi::Array>();
    Napi::Object outputObj = Napi::Object::New(env);
    std::map<std::string, Napi::Object> groupObjects;

    uint32_t length = inputArray.Length();

    for (uint32_t i = 0; i < length; i++) {
        Napi::Value item = inputArray[i];
        if (!item.IsObject()) continue;

        Napi::Object inputObj = item.As<Napi::Object>();
        Napi::Array propertyNames = inputObj.GetPropertyNames();
        uint32_t propLength = propertyNames.Length();

        for (uint32_t j = 0; j < propLength; j++) {
            Napi::Value key = propertyNames.Get(j);
            if (!key.IsString()) continue;
            std::string keyStr = key.As<Napi::String>().Utf8Value();

            size_t underscorePos = keyStr.find('_');
            if (underscorePos == std::string::npos) continue;

            std::string groupKey = keyStr.substr(0, underscorePos);
            std::string propKey = keyStr.substr(underscorePos + 1);

            if (groupObjects.find(groupKey) == groupObjects.end()) {
                groupObjects[groupKey] = Napi::Object::New(env);
            }

            groupObjects[groupKey].Set(propKey, inputObj.Get(keyStr));
        }
    }

    for (const auto& pair : groupObjects) {
        outputObj.Set(pair.first, pair.second);
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