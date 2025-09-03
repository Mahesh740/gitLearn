package com.codewithmahesh.fullstack_backend.exception;

import com.codewithmahesh.fullstack_backend.model.User;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("Could not found the user with id " + id);
    }
}
