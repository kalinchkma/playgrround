#pragma once
#include<iostream>
#include<string>

// This class is SRP because this class dose only one thing 
// Create the BreadBaker and pring its details
class BreadBaker
{
private:
    /* data */
    std::string name;
public:
    BreadBaker(const std::string name);
    void details();
    ~BreadBaker();
};

BreadBaker::BreadBaker(const std::string name)
{
    this->name = name;
}

void BreadBaker::details()
{
    std::cout << "Mr " << this->name << " is awesome breadbacker\n";
}

BreadBaker::~BreadBaker()
{
   std::cout << "Backer is done backing\n";
}

