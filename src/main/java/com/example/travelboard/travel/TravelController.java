package com.example.travelboard.travel;

import com.example.travelboard.DataNotFoundException;
import com.example.travelboard.user.SiteUser;
import com.example.travelboard.user.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/travel")
@RequiredArgsConstructor
public class TravelController {
    private final TravelRepository travelRepository;
    private final UserRepository userRepository;

    @GetMapping("/list")
    public List<Travel> list(){
        List<Travel> travelList = travelRepository.findAll();
        return travelList;
    }


    @GetMapping("/detail/{id}")
    public Travel travelDetail(@PathVariable("id") Integer id){
        Optional<Travel> travel = travelRepository.findById(id);
        if(travel.isPresent()) {
            return travel.get();
        }else {
            throw new DataNotFoundException("data not found");
        }
    }

    @PostMapping("/create")
    public String travelCreate(@RequestBody DataDTO dataDTO, HttpServletResponse response) throws IOException {
        Travel travel = new Travel();
        travel.setSubject(dataDTO.getSubject());
        travel.setContent(dataDTO.getContent());
        travel.setLat(dataDTO.getLat());
        travel.setLng(dataDTO.getLng());
        Optional<SiteUser> byId = userRepository.findById(1L);
        travel.setAuthor(byId.get());
        travel.setCreateDate(LocalDateTime.now());
        travelRepository.save(travel);
        return "redirect";
    }
}
