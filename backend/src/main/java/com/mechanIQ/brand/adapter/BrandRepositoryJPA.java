package com.mechanIQ.brand.adapter;

import com.mechanIQ.brand.domain.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepositoryJPA extends JpaRepository<Brand, Long> {
}
