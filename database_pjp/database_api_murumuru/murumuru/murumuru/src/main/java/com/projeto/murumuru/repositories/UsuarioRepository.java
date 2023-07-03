package com.projeto.murumuru.repositories;

import com.projeto.murumuru.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

    Usuario findByEmailAndPassword(String email, String password);
}
