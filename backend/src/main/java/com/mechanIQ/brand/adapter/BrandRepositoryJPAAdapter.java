package com.mechanIQ.brand.adapter;

import com.mechanIQ.brand.domain.Brand;
import com.mechanIQ.brand.domain.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BrandRepositoryJPAAdapter implements BrandRepository {

    private final BrandRepositoryJPA repo;

    @Autowired
    public BrandRepositoryJPAAdapter(BrandRepositoryJPA repo) {
        this.repo = repo;
    }

    @Override
    public Brand save(Brand brand) {
        return repo.save(brand);
    }

    public List<Brand> getAll() {
        return repo.findAll();
    }
}
