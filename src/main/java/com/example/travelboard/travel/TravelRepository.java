package com.example.travelboard.travel;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TravelRepository extends JpaRepository<Travel, Integer> {
    List<Travel> findBySubject(String string);
}
