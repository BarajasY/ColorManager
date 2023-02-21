package com.yahir.ColorManager;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yahir.ColorManager.Color.Color;
import com.yahir.ColorManager.Color.ColorRepository;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/colors")
public class ColorManagerApplication {

	private final ColorRepository colorRepository;

	public ColorManagerApplication(ColorRepository colorRepository) {
		this.colorRepository = colorRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(ColorManagerApplication.class, args);
	}

	@CrossOrigin
	@GetMapping
	public List<Color> getColors() {
		return colorRepository.findAll();
	}

	record NewColorRequest(
		String color1,
		String color2,
		String color3
	) {}

	@PostMapping
	public void createColors(@RequestBody NewColorRequest request) {
		Color Color = new Color();
		Color.setColor1(request.color1());
		Color.setColor2(request.color2());
		Color.setColor3(request.color3());
		colorRepository.save(Color);
	}

}