package com.mechanIQ.brand.adapter;


import com.mechanIQ.brand.application.BrandService;
import com.mechanIQ.brand.domain.Brand;
import com.mechanIQ.brand.dto.CreateBrandRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/brands")
public class BrandController {

    private final BrandService brandService;


    @Autowired
    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping()
    public List<Brand> getAll() {
        return brandService.getAll();
    }

    @PostMapping()
    public Brand createBrand(CreateBrandRequest request) {
        return brandService.create(request);
    }


}
