package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(name = "localidade")
public class Localidade {

    @Id
    private int id_localidade;

    private String regiao;
    private String estado;
    private String cidade;
    private String rua;
    private int cep;

    public int getId_localidade() {
        return id_localidade;
    }

    public void setId_localidade(int id_localidade) {
        this.id_localidade = id_localidade;
    }

    public String getRegiao() {
        return regiao;
    }

    public void setRegiao(String regiao) {
        this.regiao = regiao;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }
}

