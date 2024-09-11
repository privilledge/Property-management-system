package com.property.property_management.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "property")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private String address;
    private String totalTenants;
    private String totalUnits;
    private String type;
    private String propertyManager;
    private String contactEmail;
    private String contactPhone;

    public List<Unit> getUnits() {
        return units;
    }

    public void setUnits(List<Unit> units) {
        this.units = units;
    }

    @OneToMany(mappedBy = "property",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Unit> units=new ArrayList<>();

    public String getTotalTenants() {
        return totalTenants;
    }

    public void setTotalTenants(String totalTenants) {
        this.totalTenants = totalTenants;
    }

    public String getTotalUnits() {
        return totalUnits;
    }

    public void setTotalUnits(String totalUnits) {
        this.totalUnits = totalUnits;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPropertyManager() {
        return propertyManager;
    }

    public void setPropertyManager(String propertyManager) {
        this.propertyManager = propertyManager;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }
//
//    public List getMaintenanceRequests() {
//        return maintenanceRequests;
//    }
//
//    public void setMaintenanceRequests(List maintenanceRequests) {
//        this.maintenanceRequests = maintenanceRequests;
//    }


//    @ElementCollection
//    private List maintenanceRequests;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
