package com.dev.app.models.services;

import com.dev.app.models.entity.Usuario;

public interface IUsuarioService {

	public Usuario findByUsername(String username);
}