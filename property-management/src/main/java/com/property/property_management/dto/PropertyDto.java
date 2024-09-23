package com.property.property_management.dto;

public class PropertyDto {
    private Long id;
    private String propertyName;
    private String address;
    private String totalTenants;
    private String totalUnits;
    private String type;
    private String propertyManager;
    private String contactEmail;
    private String contactPhone;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

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
}
