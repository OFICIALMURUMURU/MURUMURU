package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(name = "gps_var")
public class GpsVar {

    @Id
    private int id_gps;

    private String regiao;
    private String estado;
    private String cidade;
    private int cep;

    // Getters e Setters
}
