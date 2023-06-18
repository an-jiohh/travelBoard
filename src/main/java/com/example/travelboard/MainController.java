package com.example.travelboard;

import com.example.travelboard.user.SiteUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {
    @GetMapping("/api/hello")
    public List<SiteUser> test() {
        List<SiteUser> userList = new ArrayList<>();

        SiteUser user1 = new SiteUser();
        user1.setId(1L);
        user1.setEmail("user1@example.com");
        user1.setPassword("password1");
        user1.setUsername("User 1");
        userList.add(user1);

        SiteUser user2 = new SiteUser();
        user2.setId(2L);
        user2.setEmail("user2@example.com");
        user2.setPassword("password2");
        user2.setUsername("User 2");
        userList.add(user2);

        return userList;
    }
}
