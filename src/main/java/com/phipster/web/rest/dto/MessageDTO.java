package com.phipster.web.rest.dto;
public class MessageDTO {
    private String text;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "MessageDTO{" +
            "text='" + text + '\'' +
            '}';
    }
}
