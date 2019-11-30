package com.smart.app.agilepro.model;

public enum Status {
    TODO("ToDo"), DEFINED("Defined"), IN_PROGRESS("In Progress"), COMPLETED("Completed"), ACCEPTED("Accepted");

    private String name;

    private Status(String name) {
        this.setName(name);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
