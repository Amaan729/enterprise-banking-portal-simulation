package com.example.banking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TransactionService {

    @Autowired TransactionRepository txnRepo;
    @Autowired AccountRepository acctRepo;

    public List<Transaction> getTransactionsForAccount(Account account) {
        return txnRepo.findByAccount(account);
    }

    @Transactional
    public boolean transfer(User user, Long fromId, Long toId, double amount) {
        Account from = acctRepo.findById(fromId).orElse(null);
        Account to   = acctRepo.findById(toId).orElse(null);

        if (from == null || to == null) return false;
        if (!from.getUser().getId().equals(user.getId())) return false;
        if (from.getBalance() < amount) return false;

        from.setBalance(from.getBalance() - amount);
        to.setBalance(to.getBalance() + amount);

        acctRepo.save(from);
        acctRepo.save(to);

        txnRepo.save(new Transaction(null, from, "DEBIT", amount));
        txnRepo.save(new Transaction(null, to, "CREDIT", amount));
        return true;
    }
}