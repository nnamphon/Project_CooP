package com.example.demo.controller;


import com.example.demo.entity.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CoffeeDeliveryController {

    @Autowired
    private   CoffeeDeliveryRepository coffeeDeliveryRepository;

    @Autowired
    private ManuRepository manuRepository;
    @Autowired
    public ServiceTypeRepository serviceTypeRepository;
    @Autowired
    private MoldRepository moldRepository;



    public CoffeeDeliveryController(CoffeeDeliveryRepository coffeeDeliveryRepository) {
        this.coffeeDeliveryRepository = coffeeDeliveryRepository;
    }

    @GetMapping("/CoffeeDelivery")
    public Collection<CoffeeDelivery> CoffeeDelivery(){
        return coffeeDeliveryRepository.findAll().stream().collect(Collectors.toList());

    }

    @PostMapping("/CoffeeDelivery/{serviceType}/{mold}/{manu}/{menuName}/{priece}/{lat}/{lng}")
    public CoffeeDelivery newPostCoffee(@PathVariable Long serviceType, @PathVariable Long mold,
                                        @PathVariable int manu,@PathVariable int priece, @PathVariable Double lat,
                                        @PathVariable Double lng,@PathVariable String menuName){

        CoffeeDelivery newPostCoffee = new CoffeeDelivery();
        ServiceType serviceType1 = new ServiceType();
        serviceType1 = serviceTypeRepository.findByServiceTypeId(serviceType);

        Mold mold1 = new Mold();
        mold1 = moldRepository.findByMoldID(mold);

        Manu manu1 = new Manu();
        manu1 = manuRepository.findByManuid(manu);

        newPostCoffee.setLatitude(lat);
        newPostCoffee.setLongitude(lng);
        newPostCoffee.setPrice(priece);
        newPostCoffee.setName(menuName);
        newPostCoffee.setServiceType(serviceType1);
        newPostCoffee.setManu(manu1);

        newPostCoffee.setMold(mold1);

        return coffeeDeliveryRepository.save(newPostCoffee);

    }

    @DeleteMapping("/CoffeeDelivery/{coffeeDeliveryId}")
    public void deleteCoffeeDelivery(@PathVariable Long coffeeDeliveryId)
    {

        coffeeDeliveryRepository.deleteById(coffeeDeliveryId);


    }


}
