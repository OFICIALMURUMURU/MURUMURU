package com.projeto.murumuru.models;
import jakarta.persistence.*;
@Entity
@Table(name = "funcao")
public class Funcao {

    @Id
    private int id_funcao;

    private String tp_func;

    public int getId_funcao() {
        return id_funcao;
    }

    public void setId_funcao(int id_funcao) {
        this.id_funcao = id_funcao;
    }

    public String getTp_func() {
        return tp_func;
    }

    public void setTp_func(String tp_func) {
        this.tp_func = tp_func;
    }
}

