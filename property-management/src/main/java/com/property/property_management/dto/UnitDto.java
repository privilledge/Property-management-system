package com.property.property_management.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

public class UnitDto {

private String unitName;

    private String floor;
    private String size;
    private String rooms;
    private String bathrooms;
    private String tenant;
    private String rentAmount;
    private Boolean isAvailable;
    private Date leaseStartDate;
    private Date leaseEndDate;
    private PropertyDto property;


    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }
    public String getFloor() {
        return floor;
    }

    public PropertyDto getProperty() {
        return property;
    }

    public void setProperty(PropertyDto property) {
        this.property = property;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getRooms() {
        return rooms;
    }

    public void setRooms(String rooms) {
        this.rooms = rooms;
    }

    public String getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(String bathrooms) {
        this.bathrooms = bathrooms;
    }

    public String getTenant() {
        return tenant;
    }

    public void setTenant(String status) {
        this.tenant = status;
    }

    public String getRentAmount() {
        return rentAmount;
    }

    public void setRentAmount(String rentAmount) {
        this.rentAmount = rentAmount;
    }

    public Boolean getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(Boolean available) {
        isAvailable = available;
    }

    public Date getLeaseStartDate() {
        return leaseStartDate;
    }

    public void setLeaseStartDate(Date leaseStartDate) {
        this.leaseStartDate = leaseStartDate;
    }

    public Date getLeaseEndDate() {
        return leaseEndDate;
    }

    public void setLeaseEndDate(Date leaseEndDate) {
        this.leaseEndDate = leaseEndDate;
    }

}
