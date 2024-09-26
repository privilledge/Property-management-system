package com.property.property_management.controller;


import com.property.property_management.dto.OccupancyStatsDto;
import com.property.property_management.model.Property;
import com.property.property_management.repository.PropertyRepository;
import com.property.property_management.repository.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path ="/property")
public class PropertyController {
    public PropertyController(PropertyRepository propertyRepository,UnitRepository unitRepository) {
        this.propertyRepository = propertyRepository;
        this.unitRepository=unitRepository;
    }

    @Autowired
    public PropertyRepository propertyRepository;
    @Autowired
    public UnitRepository unitRepository;

    @PostMapping("/add-property")
    public ResponseEntity<Property> addProperty(@RequestBody Property property){
        propertyRepository.save(property);
        return ResponseEntity.ok(property);
    }

    @GetMapping("/properties")
    public List<Property> getProperties(){
        return propertyRepository.findAll();
    }

    @GetMapping("/propertyById/{id}")
    public ResponseEntity<?> getPropertyById(Property property){
        Optional<Property> selectedProperty=propertyRepository.findById(property.getId());
        if(selectedProperty.isPresent()){
           return ResponseEntity.ok().body(selectedProperty.get());
        }
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Property not found");
    }

    @DeleteMapping("/deleteProperty/{id}")
    public ResponseEntity<?> deleteProperty(Property property){
        Optional<Property> selectedProperty=propertyRepository.findById(property.getId());
        if(selectedProperty.isPresent()){
            propertyRepository.delete(selectedProperty.get());
            return ResponseEntity.ok().body("Deleted");
        }
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
    }

    @PutMapping("/editProperty/{id}")
    public ResponseEntity<?> editProperty(@RequestBody Property updatedProperty,@PathVariable Long id){
        Optional<Property> selectedProperty=propertyRepository.findById(id);
        if(selectedProperty.isPresent()){
           Property property=selectedProperty.get();

           property.setAddress(updatedProperty.getAddress());
           property.setPropertyManager(updatedProperty.getPropertyManager());
           property.setContactEmail(updatedProperty.getContactEmail());
           property.setContactPhone(updatedProperty.getContactPhone());
           property.setPropertyName(updatedProperty.getPropertyName());
           property.setTotalTenants(updatedProperty.getTotalTenants());
           property.setTotalUnits(updatedProperty.getTotalUnits());
           property.setType(updatedProperty.getType());

           propertyRepository.save(property);
           return ResponseEntity.ok( property );
        }
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Property not found");

    }
    @GetMapping("/occupancy-stats")
    public List<OccupancyStatsDto> getOccupancyStats() {
        List<Property> properties = propertyRepository.findAll();
        List<OccupancyStatsDto> stats = new ArrayList<>();

        for (Property property : properties) {
            long available = unitRepository.countByPropertyAndIsAvailable(property, true);
            long occupied = unitRepository.countByPropertyAndIsAvailable(property, false);
            stats.add(new OccupancyStatsDto(property.getPropertyName(), available, occupied));
        }

        return stats;
    }


}
