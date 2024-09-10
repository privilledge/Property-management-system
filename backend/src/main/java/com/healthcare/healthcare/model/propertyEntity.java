package com.healthcare.healthcare.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "properties")
public class propertyEntity {
    @Id
    private Long id;
    private String name;
    private String address;
    private String totalTenants;
    private String totalUnits;
    private String type;
    private String propertyManager;
    private String contactEmail;

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

    private String contactPhone;
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
