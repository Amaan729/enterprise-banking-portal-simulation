package com.example.banking;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
public class Transaction {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private double amount;
    private Instant timestamp;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    public Transaction() {}

    public Transaction(Long id, Account account, String type, double amount) {
        this.id = id;
        this.account = account;
        this.type = type;
        this.amount = amount;
        this.timestamp = Instant.now();
    }

    // Getters & setters omitted for brevity
    public Long getId() { return id; }
    public String getType() { return type; }
    public void setType(String t) { this.type = t; }
    public double getAmount() { return amount; }
    public void setAmount(double a) { this.amount = a; }
    public Instant getTimestamp() { return timestamp; }
    public void setTimestamp(Instant ts) { this.timestamp = ts; }
    public Account getAccount() { return account; }
    public void setAccount(Account a) { this.account = a; }
}