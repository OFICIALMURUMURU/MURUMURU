package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(schema = "termos")
public class Termos {

    @Id
    int id_termos;
    String descricao_termo;
    public int getId_termos() {
        return id_termos;
    }

    public void setId_termos(int id_termos) {
        this.id_termos = id_termos;
    }

    public String getDescricao_termo() {
        return descricao_termo;
    }

    public void setDescricao_termo(String descricao_termo) {
        this.descricao_termo = descricao_termo;
    }


}
