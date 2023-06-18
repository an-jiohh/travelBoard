package com.example.travelboard.review;

import com.example.travelboard.DataNotFoundException;
import com.example.travelboard.travel.Travel;
import com.example.travelboard.user.SiteUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public Review create(Travel travel, String content, SiteUser author){
        Review review = new Review();
        review.setContent(content);
        review.setTravel(travel);
        review.setCreateDate(LocalDateTime.now());
        review.setAuthor(author);
        reviewRepository.save(review);
        return review;
    }

    public Review getReview(Integer id){
        Optional<Review> review = reviewRepository.findById(id);
        if(review.isPresent()){
            return review.get();
        }else{
            throw new DataNotFoundException("review not found");
        }
    }

    public void modify(Review review, String content){
        review.setContent(content);
        review.setModifyDate(LocalDateTime.now());
        reviewRepository.save(review);
    }

    public void delete(Review review){
        reviewRepository.delete(review);
    }

    public void vote(Review review, SiteUser siteUser){
        review.getVoter().add(siteUser);
        reviewRepository.save(review);
    }
}
