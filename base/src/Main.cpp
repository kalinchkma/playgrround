#include "Log.h"
#include "Math.h"
#include "Logger.h"
#include "Entity.h"

#define LOG(x) std::cout << x << std::endl;

void create_entity()
{
  for (int i = 0; i < 5; i++)
  {
    Entity e(2.0f*(float)i, 2.0f*(float)i);
    e.print_position();
  }
}
int Entity::COUNTER = 0;
int main()
{
  // create_entity();
  // LOG("Total entity created: " << Entity::COUNTER);
  int number[5];
  int* ptr = number;

  for (int i = 0; i < 5; i++)
    number[i] = 1+i;
  LOG(number[2]); 
  number[2] = 70;
  LOG(number[2]);
  *(ptr + 2) = 99;
  LOG(number[2])
}
