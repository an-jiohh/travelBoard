package com.example.travelboard;

import com.example.travelboard.travel.TravelService;
import com.example.travelboard.user.SiteUser;
import com.example.travelboard.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class TravelBoardApplicationTests {

    @Autowired
    private TravelService travelService;

    @Autowired
    private UserRepository userRepository;

    @Test
    void createEntity(){
        Optional<SiteUser> byId = userRepository.findById(1L);
        SiteUser siteUser = byId.get();

        travelService.create("익산 미륵사지","**이번에 소개드릴 여행지는 군산의 군산대학교입니다.**\n" +
                "\n" +
                "* 리스트1\n" +
                "* 리스트2\n" +
                "* 리스트3\n" +
                "\n" +
                "자세한 내용은 아래를 더 참고해주세요", siteUser, 35.950750, 126.693643);
    }

    @Test
    void createUser(){
        SiteUser siteUser = new SiteUser();
        siteUser.setUsername("안지호");
        siteUser.setPassword("dkswlgh");
        siteUser.setEmail("dkswlgh99@naver.com");
        userRepository.save(siteUser);
    }

}
