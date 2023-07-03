package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(name = "experiencia")
public class Experiencia {

    @Id
    private int id_exp;

    private String nv_exp;

    public int getId_exp() {
        return id_exp;
    }

    public void setId_exp(int id_exp) {
        this.id_exp = id_exp;
    }

    public String getNv_exp() {
        return nv_exp;
    }

    public void setNv_exp(String nv_exp) {
        this.nv_exp = nv_exp;
    }
}

