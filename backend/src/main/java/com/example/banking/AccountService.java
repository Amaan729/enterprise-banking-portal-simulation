package com.example.banking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private final AccountRepository accountRepo;

    @Autowired
    public AccountService(AccountRepository accountRepo) {
        this.accountRepo = accountRepo;
    }

    public List<Account> getAccountsForUser(User user) {
        return accountRepo.findByUser(user);
    }

    public Account createAccount(User user, String type, double initialDeposit) {
        Account acct = new Account();
        acct.setUser(user);
        acct.setType(type);
        acct.setBalance(initialDeposit);
        return accountRepo.save(acct);
    }
}
