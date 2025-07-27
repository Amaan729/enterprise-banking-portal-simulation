package com.example.banking.payload.request;

public class CreateAccountRequest {
    private String type;
    private double initialDeposit;

    public CreateAccountRequest() {}

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public double getInitialDeposit() { return initialDeposit; }
    public void setInitialDeposit(double initialDeposit) { this.initialDeposit = initialDeposit; }
}
