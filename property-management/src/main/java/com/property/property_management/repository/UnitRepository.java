package com.property.property_management.repository;

import com.property.property_management.model.Unit;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UnitRepository extends JpaRepository<Unit, Id> {
    Optional<Unit> findById(Long id);
}
