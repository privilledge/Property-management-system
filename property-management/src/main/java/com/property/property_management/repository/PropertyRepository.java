package com.property.property_management.repository;


import com.property.property_management.model.Property;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property,Id> {
}
