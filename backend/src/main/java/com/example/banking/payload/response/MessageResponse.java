package com.example.banking.payload.response;

public class MessageResponse {
    private String message;
    public MessageResponse(String msg) { this.message = msg; }
    public String getMessage() { return message; }
    public void setMessage(String m) { this.message = m; }
}
