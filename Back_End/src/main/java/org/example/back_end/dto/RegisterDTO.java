package org.example.back_end.dto;

import lombok.Data;

@Data
public class RegisterDTO {
    private String username;
    private String name;
    private String password;
    private String role;
}
