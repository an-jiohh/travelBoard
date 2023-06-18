package com.example.travelboard.travel;

import com.example.travelboard.DataNotFoundException;
import com.example.travelboard.user.SiteUser;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Array;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TravelService {
    private final TravelRepository travelRepository;

    public List<Travel> getList(){
        List<Sort.Order> sorts = new ArrayList<>();
        sorts.add(Sort.Order.desc("createDate"));
        List<Travel> travelList = travelRepository.findAll();
        return travelList;
    }

    public Travel getTravel(Integer id){
        Optional<Travel> travel = travelRepository.findById(id);
        if(travel.isPresent()){
            return travel.get();
        } else{
            throw new DataNotFoundException("question not found");
        }
    }

    public void create(String subject, String content, SiteUser author, double lat, double lng){
        Travel travel = new Travel();
        travel.setSubject(subject);
        travel.setContent(content);
        travel.setAuthor(author);
        travel.setCreateDate(LocalDateTime.now());
        travel.setLat(lat);
        travel.setLng(lng);
        travelRepository.save(travel);
    }

    public void modify(Travel travel, String subject, String content){
        travel.setSubject(subject);
        travel.setContent(content);
        travel.setModifyDate(LocalDateTime.now());
        travelRepository.save(travel);
    }

    public void delete(Travel travel){
        travelRepository.delete(travel);
    }

    public void vote(Travel travel, SiteUser siteUser){
        travel.getVoter().add(siteUser);
        travelRepository.save(travel);
    }
}
