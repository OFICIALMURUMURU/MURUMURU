package com.projeto.murumuru.models;
import jakarta.persistence.*;
@Entity
@Table(name = "anuncio_ajudante")
public class AnuncioAjudante {

    @Id
    private int id_anucio_ajudante;

    private int id_usuario;
    private String nome;
    private String interesse_obras;
    private String preco_por_dia;
    private int estrelas;

    public int getId_anucio_ajudante() {
        return id_anucio_ajudante;
    }

    public void setId_anucio_ajudante(int id_anucio_ajudante) {
        this.id_anucio_ajudante = id_anucio_ajudante;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getInteresse_obras() {
        return interesse_obras;
    }

    public void setInteresse_obras(String interesse_obras) {
        this.interesse_obras = interesse_obras;
    }

    public String getPreco_por_dia() {
        return preco_por_dia;
    }

    public void setPreco_por_dia(String preco_por_dia) {
        this.preco_por_dia = preco_por_dia;
    }

    public int getEstrelas() {
        return estrelas;
    }

    public void setEstrelas(int estrelas) {
        this.estrelas = estrelas;
    }
}

