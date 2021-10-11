package com.example.foodwaste.controllers;


import com.example.foodwaste.model.RecipeModel;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class FoodController {

    @GetMapping("/Recipe")
    public String beforeSearch(Model model){
        model.addAttribute("Recipe",new RecipeModel());
        return "recipe";
    }

}
