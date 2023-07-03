package com.projeto.murumuru.models;
import jakarta.persistence.*;
@Entity
@Table(name = "tp_usuario")
public class TpUsuario {

    @Id
    private int id_user;

    private String name_tpUser;

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getName_tpUser() {
        return name_tpUser;
    }

    public void setName_tpUser(String name_tpUser) {
        this.name_tpUser = name_tpUser;
    }
}

