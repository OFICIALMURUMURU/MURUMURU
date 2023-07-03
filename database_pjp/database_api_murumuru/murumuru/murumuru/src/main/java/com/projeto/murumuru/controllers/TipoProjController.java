package com.projeto.murumuru.controllers;

import com.projeto.murumuru.models.TipoProjetos;
import com.projeto.murumuru.repositories.TipoProjetosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/tipo_projetos")
public class TipoProjController {
    @Autowired
    TipoProjetosRepository tipoProjetosBD;


    @CrossOrigin
    @GetMapping("/list")
    public List<TipoProjetos> findAllTipoProjetos(){

        return tipoProjetosBD.findAll();
    }
}

