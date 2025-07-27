package com.example.banking;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Account {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private double balance;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Getters & setters omitted for brevity
    public Long getId() { return id; }
    public String getType() { return type; }
    public void setType(String t) { this.type = t; }
    public double getBalance() { return balance; }
    public void setBalance(double b) { this.balance = b; }
    public User getUser() { return user; }
    public void setUser(User u) { this.user = u; }
}