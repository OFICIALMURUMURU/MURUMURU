package com.projeto.murumuru.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "projetos")
public class Projetos {

    @Id
    private int id_projetos;

    private String titulo_projeto;
    private LocalDate dt_projeto;
    private String desc_projetos;
    private boolean status_projetos;
    private LocalDate dt_publicacao;
    private int curtidas;
    private String fotos;

    public int getId_projetos() {
        return id_projetos;
    }

    public void setId_projetos(int id_projetos) {
        this.id_projetos = id_projetos;
    }

    public String getTitulo_projeto() {
        return titulo_projeto;
    }

    public void setTitulo_projeto(String titulo_projeto) {
        this.titulo_projeto = titulo_projeto;
    }

    public LocalDate getDt_projeto() {
        return dt_projeto;
    }

    public void setDt_projeto(LocalDate dt_projeto) {
        this.dt_projeto = dt_projeto;
    }

    public String getDesc_projetos() {
        return desc_projetos;
    }

    public void setDesc_projetos(String desc_projetos) {
        this.desc_projetos = desc_projetos;
    }

    public boolean isStatus_projetos() {
        return status_projetos;
    }

    public void setStatus_projetos(boolean status_projetos) {
        this.status_projetos = status_projetos;
    }

    public LocalDate getDt_publicacao() {
        return dt_publicacao;
    }

    public void setDt_publicacao(LocalDate dt_publicacao) {
        this.dt_publicacao = dt_publicacao;
    }

    public int getCurtidas() {
        return curtidas;
    }

    public void setCurtidas(int curtidas) {
        this.curtidas = curtidas;
    }

    public String getFotos() {
        return fotos;
    }

    public void setFotos(String fotos) {
        this.fotos = fotos;
    }
}

