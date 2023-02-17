package com.yahir.ColorManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ColorManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ColorManagerApplication.class, args);
	}

	@GetMapping("/")
	private String greeting (){
		return "Hola";
	}

}
