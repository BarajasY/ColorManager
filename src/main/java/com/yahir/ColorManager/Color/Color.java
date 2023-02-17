package com.yahir.ColorManager.Color;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Color {

    public Color() {}

    @Id
    @SequenceGenerator(
        name = "color_id_sequence",
        sequenceName = "color_id_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "color_id_sequence"
    )
    private Integer id;
    private String color1;
    private String color2;
    private String color3;

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", color1='" + getColor1() + "'" +
            ", color2='" + getColor2() + "'" +
            ", color3='" + getColor3() + "'" +
            "}";
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Color)) {
            return false;
        }
        Color color = (Color) o;
        return Objects.equals(id, color.id) && Objects.equals(color1, color.color1) && Objects.equals(color2, color.color2) && Objects.equals(color3, color.color3);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, color1, color2, color3);
    }

    public Color(Integer id, String color1, String color2, String color3) {
        this.id = id;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getColor1() {
        return this.color1;
    }

    public void setColor1(String color1) {
        this.color1 = color1;
    }

    public String getColor2() {
        return this.color2;
    }

    public void setColor2(String color2) {
        this.color2 = color2;
    }

    public String getColor3() {
        return this.color3;
    }

    public void setColor3(String color3) {
        this.color3 = color3;
    }
}
