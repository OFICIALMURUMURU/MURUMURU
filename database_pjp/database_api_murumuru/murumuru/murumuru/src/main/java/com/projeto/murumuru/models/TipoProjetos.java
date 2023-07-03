package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(name = "tipo_projetos")
public class TipoProjetos {

    @Id
    private int id_tp_projetos;

    public int getId_tp_projetos() {
        return id_tp_projetos;
    }

    public void setId_tp_projetos(int id_tp_projetos) {
        this.id_tp_projetos = id_tp_projetos;
    }

    private String tipo_projeto;

    public String getTipo_projeto() {
        return tipo_projeto;
    }

    public void setTipo_projeto(String tipo_projeto) {
        this.tipo_projeto = tipo_projeto;
    }
// Getters e Setters
}
