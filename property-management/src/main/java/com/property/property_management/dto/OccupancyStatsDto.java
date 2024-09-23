package com.property.property_management.dto;

public class OccupancyStatsDto {
    private String propertyName;
    private Long availableUnits;
    private Long occupiedUnits;

    public OccupancyStatsDto() {
    }

    public OccupancyStatsDto(String propertyName, Long availableUnits, Long occupiedUnits) {
        this.propertyName = propertyName;
        this.availableUnits = availableUnits;
        this.occupiedUnits = occupiedUnits;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public Long getAvailableUnits() {
        return availableUnits;
    }

    public void setAvailableUnits(Long availableUnits) {
        this.availableUnits = availableUnits;
    }

    public Long getOccupiedUnits() {
        return occupiedUnits;
    }

    public void setOccupiedUnits(Long occupiedUnits) {
        this.occupiedUnits = occupiedUnits;
    }
}
