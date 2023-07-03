package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(name = "tipo_parceiros")
public class TipoParceiros {

    @Id
    private int id_tp_parceiros;
    private String tipo_parceiro;

    public int getId_tp_parceiros() {
        return id_tp_parceiros;
    }

    public void setId_tp_parceiros(int id_tp_parceiros) {
        this.id_tp_parceiros = id_tp_parceiros;
    }

    public String getTipo_parceiro() {
        return tipo_parceiro;
    }

    public void setTipo_parceiro(String tipo_parceiro) {
        this.tipo_parceiro = tipo_parceiro;
    }
}

