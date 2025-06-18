#include <napi.h>

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
    exports.Set("myMethod", Napi::Function::New(env, MyMethod));
    return exports;
}

NODE_API_MODULE(addon, Init)