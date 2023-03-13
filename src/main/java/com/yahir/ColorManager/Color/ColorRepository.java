package com.yahir.ColorManager.Color;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorRepository extends JpaRepository<Color, Integer> {
    
    Color getColorById(Number id);

    List<Color> getColorByCreator(String creator);
}
