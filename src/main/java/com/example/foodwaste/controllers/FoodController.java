package com.example.foodwaste.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FoodController {

    @GetMapping("/Recipe")
    public String search(){
        return "recipe";
    }

}
