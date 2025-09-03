package com.codewithmahesh.fullstack_backend.repository;

import com.codewithmahesh.fullstack_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}

