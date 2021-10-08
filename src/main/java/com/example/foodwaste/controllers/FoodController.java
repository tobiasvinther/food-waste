package com.example.foodwaste.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FoodController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
    @GetMapping("/aboutus")
    public String aboutUs() {
        return "About_us";
    }
    @GetMapping("/test")
    public String test() {
        return "tipPage";
    }

    @GetMapping("/tip1")
    public String tip1() {
        return "textBlocks/tip1";
    }
    @GetMapping("/tip2")
    public String tip2() {
        return "textBlocks/tip2";
    }
    @GetMapping("/tip3")
    public String tip3() {
        return "textBlocks/tip3";
    }
}
