package com.yahir.ColorManager.Color;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorRepository extends JpaRepository<Color, Integer> {
    
    Color getColorById(Number id);
}
