package com.property.property_management.controller;


import com.property.property_management.model.Property;
import com.property.property_management.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path ="/property")
public class PropertyController {
    public PropertyController(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Autowired
    public PropertyRepository propertyRepository;

    @PostMapping("/add-property")
    public ResponseEntity<Property> addProperty(@RequestBody Property property){
        propertyRepository.save(property);
        return ResponseEntity.ok(property);
    }
}
