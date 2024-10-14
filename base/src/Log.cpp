#include "Log.h"

void Log(const char* message)
{
    std::cout << message << std::endl;
}

void Log(int number) 
{
    std::cout << number << std::endl;
}

void Log(bool b )
{
    std::cout << b << std::endl;
}
void Log(double d) 
{
    std::cout << d << std::endl;
}

void Log(char c) 
{
    std::cout << c << std::endl;
}

void Log(short s)
{
    std::cout << s << std::endl;
}

void Log(long l)
{
    std::cout << l << std::endl;
}

void Log(float f)
{
    std::cout << f << std::endl;
}


void pr_type_size()
{
    print("size of int:" << sizeof(int));
    print("size of char: " << sizeof(char));
    print("size of short: " << sizeof(short));
    print("size of long: " << sizeof(long));
    print("size of float: " << sizeof(float));
    print("size of double: " << sizeof(double));
    print("size of bool: " << sizeof(bool));
    print("size of long int:" << sizeof(long int));
    print("size of long long: " << sizeof(long long));
    print("size of long double: " << sizeof(long double)); 
}