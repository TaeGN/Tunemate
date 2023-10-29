package com.example.tunemateuserservice.config;

import com.example.tunemateuserservice.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, MemberService memberService) throws Exception {
        http.oauth2Login(oauth2login-> oauth2login.userInfoEndpoint(userInfoEndpointConfig -> userInfoEndpointConfig.userService(memberService)));

        return http.build();
    }
}
