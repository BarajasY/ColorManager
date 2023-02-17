package com.yahir.ColorManager;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yahir.ColorManager.Color.Color;
import com.yahir.ColorManager.Color.ColorRepository;

@SpringBootApplication
@RestController
public class ColorManagerApplication {

	private final ColorRepository colorRepository;

	public ColorManagerApplication(ColorRepository colorRepository) {
		this.colorRepository = colorRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(ColorManagerApplication.class, args);
	}

	@GetMapping("/")
	public List<Color> getColors() {
		return colorRepository.findAll();
	}

}