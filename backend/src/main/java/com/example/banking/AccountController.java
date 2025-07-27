package com.example.banking;

import com.example.banking.payload.request.CreateAccountRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired AccountService accountService;
    @Autowired UserRepository userRepo;

    @GetMapping
    public ResponseEntity<List<Account>> getUserAccounts(Principal principal) {
        User u = userRepo.findByUsername(principal.getName());
        return ResponseEntity.ok(accountService.getAccountsForUser(u));
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(
            @Valid @RequestBody CreateAccountRequest req, Principal principal) {
        User u = userRepo.findByUsername(principal.getName());
        Account acc = accountService.createAccount(u, req.getType(), req.getInitialDeposit());
        return ResponseEntity.ok(acc);
    }
}