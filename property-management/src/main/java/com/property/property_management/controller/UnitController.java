package com.property.property_management.controller;


import com.property.property_management.dto.UnitDto;
import com.property.property_management.model.Property;
import com.property.property_management.model.Unit;
import com.property.property_management.repository.PropertyRepository;
import com.property.property_management.repository.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/units")
public class UnitController {
    @Autowired
    private UnitRepository unitRepository;
    @Autowired
    private PropertyRepository propertyRepository;
    public UnitController(UnitRepository unitRepository, PropertyRepository propertyRepository) {
        this.unitRepository = unitRepository;
        this.propertyRepository = propertyRepository;
    }


    @PostMapping("/addUnit")
    public ResponseEntity<?> addUnit(@RequestBody UnitDto unitDto){
        Optional<Property> selectedProperty = propertyRepository.findById(unitDto.getPropertyId());

        if (selectedProperty.isPresent()) {
            Unit unit = new Unit(selectedProperty.get());
            // Set the property here
            unit.setBathrooms(unitDto.getBathrooms());
            unit.setFloor(unitDto.getFloor());
            unit.setRentAmount(unitDto.getRentAmount());
            unit.setRooms(unitDto.getRooms());
            unit.setSize(unitDto.getSize());
            unit.setStatus(unitDto.getStatus());
            unit.setAvailable(unitDto.getAvailable());
            unit.setLeaseStartDate(unitDto.getLeaseStartDate());
            unit.setLeaseEndDate(unitDto.getLeaseEndDate());

            unitRepository.save(unit);
            return ResponseEntity.ok("Unit added");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Property not found");
        }
    }


    @GetMapping("/getAllUnits")
    public List<Unit> getAllUnits(){
        return unitRepository.findAll();
    }

    @GetMapping("/getUnitById/{id}")
    public ResponseEntity<?> getUnitById(@PathVariable Long id, Unit unit){
        Optional<Unit> selectedUnit=unitRepository.findById(id);
        if(selectedUnit.isPresent()){
            return ResponseEntity.ok().body(selectedUnit.get());
        }
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Unit not found");
    }

    @PutMapping("/editUnit/{id}")
    public ResponseEntity<?> editUnit(@RequestBody Unit unit,@PathVariable Long id){
        Optional<Unit> selectedUnit=unitRepository.findById(id);
        if(selectedUnit.isPresent()){
            Unit updatedUnit= selectedUnit.get();

            updatedUnit.setAvailable(unit.getAvailable());
            updatedUnit.setBathrooms(unit.getBathrooms());
            updatedUnit.setLeaseEndDate(unit.getLeaseEndDate());
            updatedUnit.setLeaseStartDate(unit.getLeaseStartDate());
            updatedUnit.setFloor(unit.getFloor());
            updatedUnit.setRentAmount(unit.getRentAmount());
            updatedUnit.setRooms(unit.getRooms());
            updatedUnit.setSize(unit.getSize());
            updatedUnit.setStatus(unit.getStatus());

            unitRepository.save(unit);
            return ResponseEntity.ok("unit updated");
        }
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("unit Not found");
    }

    @DeleteMapping("/deleteUnit/{id}")
    public String deleteUnit(@PathVariable Long id,Unit unit){
        Optional<Unit> selectedUnit=unitRepository.findById(id);
        if(selectedUnit.isPresent()){
            unitRepository.delete(selectedUnit.get());
            return "Unit deleted";
        }
        else
            return "Unit not found";
    }

}
