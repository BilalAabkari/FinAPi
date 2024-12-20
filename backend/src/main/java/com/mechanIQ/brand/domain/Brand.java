package com.mechanIQ.brand.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_brand")
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String logo_url;


    public Brand() {

    }

    public Brand(String name, String logo_url) {
        this.name = name;
        this.logo_url = logo_url;
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLogo_url() {
        return logo_url;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLogo_url(String logo_url) {
        this.logo_url = logo_url;
    }
}
