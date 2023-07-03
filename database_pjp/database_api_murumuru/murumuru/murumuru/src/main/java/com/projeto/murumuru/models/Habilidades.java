package com.projeto.murumuru.models;
import jakarta.persistence.*;
@Entity
@Table(name = "habilidades")
public class Habilidades {

    @Id
    private int id_habilidades;

    private String tipo_habilidades;

    public int getId_habilidades() {
        return id_habilidades;
    }

    public void setId_habilidades(int id_habilidades) {
        this.id_habilidades = id_habilidades;
    }

    public String getTipo_habilidades() {
        return tipo_habilidades;
    }

    public void setTipo_habilidades(String tipo_habilidades) {
        this.tipo_habilidades = tipo_habilidades;
    }
}

