package com.projeto.murumuru.models;
import jakarta.persistence.*;
@Entity
@Table(name = "parceiros")
public class Parceiros {

    @Id
    private int id_parceiros;

    private int descricao;
    private int curtidas;
    private String imagem;
    private String nome_parceiro;
    private String nome_item;
    private String endereco;


    public int getId_parceiros() {
        return id_parceiros;
    }

    public void setId_parceiros(int id_parceiros) {
        this.id_parceiros = id_parceiros;
    }

    public int getDescricao() {
        return descricao;
    }

    public void setDescricao(int descricao) {
        this.descricao = descricao;
    }

    public int getCurtidas() {
        return curtidas;
    }

    public void setCurtidas(int curtidas) {
        this.curtidas = curtidas;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getNome_parceiro() {
        return nome_parceiro;
    }

    public void setNome_parceiro(String nome_parceiro) {
        this.nome_parceiro = nome_parceiro;
    }

    public String getNome_item() {
        return nome_item;
    }

    public void setNome_item(String nome_item) {
        this.nome_item = nome_item;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}

