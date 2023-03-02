package com.yahir.ColorManager.Users;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Users {

    public Users() {}

    @Id
    @SequenceGenerator(
        name = "users_id_sequence",
        sequenceName = "users_id_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "users_id_sequence"
    )
    private Integer id;
    private String email;
    private String password;
    private String role;

    public Users(Integer id, String email, String password, String role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
