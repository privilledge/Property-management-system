package com.healthcare.healthcare.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class lease {
    @Id
    private Long id;
    private String tenant;
    private String unit;
    private Date startDate;
    private Date endDate;
    private String monthlyRent;
    private String depositAmount;
    private Boolean renewalOption;
    private String leaseTerms;
    private Boolean isActive;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTenant() {
        return tenant;
    }

    public void setTenant(String tenant) {
        this.tenant = tenant;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getMonthlyRent() {
        return monthlyRent;
    }

    public void setMonthlyRent(String monthlyRent) {
        this.monthlyRent = monthlyRent;
    }

    public String getDepositAmount() {
        return depositAmount;
    }

    public void setDepositAmount(String depositAmount) {
        this.depositAmount = depositAmount;
    }

    public Boolean getRenewalOption() {
        return renewalOption;
    }

    public void setRenewalOption(Boolean renewalOption) {
        this.renewalOption = renewalOption;
    }

    public String getLeaseTerms() {
        return leaseTerms;
    }

    public void setLeaseTerms(String leaseTerms) {
        this.leaseTerms = leaseTerms;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }
}
