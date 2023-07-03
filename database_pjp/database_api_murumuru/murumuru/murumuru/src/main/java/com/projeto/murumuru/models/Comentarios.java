package com.projeto.murumuru.models;

import jakarta.persistence.*;

@Entity
@Table(name = "comentarios")
public class Comentarios {

    @Id
    private int id_comentarios;

    private String autor_comentario;
    private String comentario;
    private String dt_comentario;

    public int getId_comentarios() {
        return id_comentarios;
    }

    public void setId_comentarios(int id_comentarios) {
        this.id_comentarios = id_comentarios;
    }

    public String getAutor_comentario() {
        return autor_comentario;
    }

    public void setAutor_comentario(String autor_comentario) {
        this.autor_comentario = autor_comentario;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getDt_comentario() {
        return dt_comentario;
    }

    public void setDt_comentario(String dt_comentario) {
        this.dt_comentario = dt_comentario;
    }
}


