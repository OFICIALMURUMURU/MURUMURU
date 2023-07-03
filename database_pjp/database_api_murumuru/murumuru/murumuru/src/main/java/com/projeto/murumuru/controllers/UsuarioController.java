package com.projeto.murumuru.controllers;

import com.projeto.murumuru.models.Usuario;
import com.projeto.murumuru.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioBD;

    @CrossOrigin
    @GetMapping("/list")
    public List<Usuario> findAllUsuarios(){
        return usuarioBD.findAll();
    }

    @CrossOrigin
    @PostMapping("/create")
    public Usuario createUsuario(@RequestBody Usuario usuario){

        return usuarioBD.save(usuario);
    }

    @CrossOrigin
    @PostMapping("/login")
    public boolean loginUsuario( @RequestBody Usuario usuario) {
        String email = usuario.getEmail(); // Converter para letras minúsculas
        String password = usuario.getPassword();

        Usuario foundUsuario = usuarioBD.findByEmailAndPassword(email, password);
        return foundUsuario != null;
    }
}
