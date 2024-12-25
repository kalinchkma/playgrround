#include<iostream>
#include "BreadBaker.h"
#include "InventoryManager.h"
#include "PaymentProcessor.h"

// Single responsibility priciple runner
void SRPRunner() 
{
    BreadBaker natsu = BreadBaker("Natsu");
    natsu.details();
    InventoryManager lucy = InventoryManager("Lucy");
    lucy.orderSupplies();
    lucy.takeOrder("Pinaple derlivary");
    lucy.orderSupplies();
}

// Open/Close Principle
void processPayment(PaymentProcessor* processor, double amount)
{
    processor->processPayment(amount);
}

void OpenCloseRunner()
{
    CreditCardPaymentProcessor creditCardProcessor;
    PayPalPaymentProcessor payPalProcessor;
    processPayment(&creditCardProcessor, 700.0);
    processPayment(&payPalProcessor, 90.0);
}


int main() {
    OpenCloseRunner();
    return 0;
}