package com.mechanIQ.brand.application;

import com.mechanIQ.brand.adapter.BrandRepositoryJPAAdapter;
import com.mechanIQ.brand.domain.Brand;
import com.mechanIQ.brand.dto.CreateBrandRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {

    private final BrandRepositoryJPAAdapter brandRepositoryAdapter;

    @Autowired
    public BrandService(BrandRepositoryJPAAdapter brandRepositoryAdapter) {
        this.brandRepositoryAdapter = brandRepositoryAdapter;
    }

    public List<Brand> getAll() {
        return brandRepositoryAdapter.getAll();
    }

    public Brand create(CreateBrandRequest brand) {
        return brandRepositoryAdapter.save(new Brand(brand.getName(), brand.getLogo_url()));
    }
}
