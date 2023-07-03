package com.projeto.murumuru.models;
import jakarta.persistence.*;
@Entity
@Table(name = "anuncio_pedreiro")
public class AnuncioPedreiro {

    @Id
    private int id_anuncio_pedreiro;

    private String nome;
    private String interesse_obras;
    private int projeto_exemplo;
    private int id_usuario;

    public int getId_anuncio_pedreiro() {
        return id_anuncio_pedreiro;
    }

    public void setId_anuncio_pedreiro(int id_anuncio_pedreiro) {
        this.id_anuncio_pedreiro = id_anuncio_pedreiro;
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

    public int getProjeto_exemplo() {
        return projeto_exemplo;
    }

    public void setProjeto_exemplo(int projeto_exemplo) {
        this.projeto_exemplo = projeto_exemplo;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }
}

