package com.mechanIQ.brand.domain;

import java.util.List;

public interface BrandRepository {

    public Brand save(Brand brand);
    public List<Brand> getAll();

}
