#pragma once
#include<iostream>

// Single Responsibility Principle example
class InventoryManager
{
private:
    /* data */
    std::string name;
    std::string order = "";
public:
    InventoryManager(const std::string& name);
    ~InventoryManager();

    void orderSupplies();
    void takeOrder(const std::string& name);
};

InventoryManager::InventoryManager(const std::string& name)
{
    this->name = name;
    std::cout << "Inventory manager " << name << " created\n";
}

void InventoryManager::takeOrder(const std::string& name)
{
    this->order = name;
}

void InventoryManager::orderSupplies() 
{
   if (this->order != "") 
   {
    std::cout << "Order " << this->order << " has been process to deliever\n";
    this->order = "";
   } 
   else 
   {
    std::cout << "There is no order to deriver\n";
   }
}

InventoryManager::~InventoryManager()
{
    std::cout << "Inventory manager is done\n";
}
