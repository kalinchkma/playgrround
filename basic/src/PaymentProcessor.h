#pragma once
#include<iostream>

// Open/Closed principle

// Base class for payment process
class PaymentProcessor
{
public:
    virtual void processPayment(double amount) = 0; // Pure virtual function
};

// Creadit card payment process
class CreditCardPaymentProcessor: public PaymentProcessor
{
    public:
        void processPayment(double amount) override {
            std::cout << "Processing credit card payment of $" << amount << "\n";
        }
};

// Extended functionality
class PayPalPaymentProcessor: public PaymentProcessor
{
    public:
        void processPayment(double amount) override {
            std::cout << "Processing Paypal payment $" << amount << "\n";
        }
};
