package org.example.back_end.controller;

import lombok.RequiredArgsConstructor;
import org.example.back_end.dto.ApiResponse;
import org.example.back_end.dto.AuthDTO;
import org.example.back_end.dto.RegisterDTO;
import org.example.back_end.entity.User;
import org.example.back_end.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
@RestController
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping(value = "register")
    public ResponseEntity<ApiResponse> registerUser(@RequestBody RegisterDTO dto) {
        return ResponseEntity.ok(new ApiResponse(
                200,
                "User Registered Successfully",
                authService.register(dto)
        ));
    }
    @PostMapping(value = "login")
    public ResponseEntity<ApiResponse> loginUser(@RequestBody AuthDTO dto) {
        return ResponseEntity.ok(new ApiResponse(
                200,
                "Login Successfully",
                authService.authenticate(dto)
        ));
    }

}
