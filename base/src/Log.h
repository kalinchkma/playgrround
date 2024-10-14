#pragma once
#include <iostream>

#define print(...) std::cout << __VA_ARGS__ << std::endl; 

void Log(const char* message);
void Log(int number);
void Log(bool );
void Log(double);
void Log(char);
void Log(short);
void Log(long);
void Log(float);


void pr_type_size();

