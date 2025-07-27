package com.example.banking.payload.request;

public class TransferRequest {
    private Long fromAccountId;
    private Long toAccountId;
    private double amount;
    // getters & setters
    public Long getFromAccountId() { return fromAccountId; }
    public void setFromAccountId(Long id) { this.fromAccountId = id; }
    public Long getToAccountId() { return toAccountId; }
    public void setToAccountId(Long id) { this.toAccountId = id; }
    public double getAmount() { return amount; }
    public void setAmount(double a) { this.amount = a; }
}
