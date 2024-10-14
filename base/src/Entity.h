#pragma once
#include <iostream>

class Entity 
{
public:
    static int COUNTER;
    float x, y;

    Entity(float x, float y)
    {
        x = x;
        y = y;
        COUNTER++;
        std::cout << "Created entity" << std::endl;
    }

    void print_position()
    {
        std::cout << x << ", " << y << std::endl;        
    }
    ~Entity()
    {
        std::cout << "Destroyed entity" << std::endl;
    }
};
