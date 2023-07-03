package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(name = "tamanho_obra")
public class TamanhoObra {

    @Id
    private int id_obra;

    public int getId_obra() {
        return id_obra;
    }

    public void setId_obra(int id_obra) {
        this.id_obra = id_obra;
    }

    public String getObra_escopo() {
        return obra_escopo;
    }

    public void setObra_escopo(String obra_escopo) {
        this.obra_escopo = obra_escopo;
    }

    private String obra_escopo;


}

