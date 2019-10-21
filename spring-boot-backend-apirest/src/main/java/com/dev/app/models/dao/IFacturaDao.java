package com.dev.app.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.dev.app.models.entity.Factura;

public interface IFacturaDao extends CrudRepository<Factura, Long>{

}
