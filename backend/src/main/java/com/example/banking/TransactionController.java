package com.example.banking;

import com.example.banking.payload.request.TransferRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired TransactionService txnService;
    @Autowired UserRepository userRepo;
    @Autowired AccountRepository acctRepo;

    @GetMapping("/{accountId}")
    public ResponseEntity<List<Transaction>> getTxns(@PathVariable Long accountId, Principal principal) {
        User u = userRepo.findByUsername(principal.getName());
        Account a = acctRepo.findById(accountId).orElse(null);
        if (a == null || !a.getUser().getId().equals(u.getId()))
            return ResponseEntity.status(403).build();
        return ResponseEntity.ok(txnService.getTransactionsForAccount(a));
    }

    @PostMapping("/transfer")
    public ResponseEntity<?> transfer(@Valid @RequestBody TransferRequest req, Principal principal) {
        User u = userRepo.findByUsername(principal.getName());
        boolean ok = txnService.transfer(u, req.getFromAccountId(),
                req.getToAccountId(), req.getAmount());
        return ok ? ResponseEntity.ok("Transfer successful")
                : ResponseEntity.badRequest().body("Transfer failed");
    }
}