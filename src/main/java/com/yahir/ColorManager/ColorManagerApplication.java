package com.yahir.ColorManager;

import java.util.List;
import java.util.Optional;
import java.util.Random;

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
@CrossOrigin
@RequestMapping("api/v1/colors")
public class ColorManagerApplication {

	private final ColorRepository colorRepository;

	public ColorManagerApplication(ColorRepository colorRepository) {
		this.colorRepository = colorRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(ColorManagerApplication.class, args);
	}

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


	// Creates a random number to retrieve a random row from psql.
	// The random number will work as the id of said row. The upperbound of the range is the amount of total entries.
	// In case the random number equals 0, it will instead return 1.
	public int RandomNumberGenerator() {
		int total = Math.toIntExact((colorRepository.count()));
		Random rand = new Random();
		int randomNumber = rand.nextInt(total + 1);
		if (randomNumber == 0) {
			return randomNumber + 1;
		}
		return randomNumber;
	}

	@GetMapping("/random")
	public Optional<Color> homeColors() {
		return colorRepository.findById(RandomNumberGenerator());
	}

}