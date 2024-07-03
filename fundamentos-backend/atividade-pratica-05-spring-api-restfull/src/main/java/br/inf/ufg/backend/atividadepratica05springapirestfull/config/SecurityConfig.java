package br.inf.ufg.backend.atividadepratica05springapirestfull.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // TODO remover permitAll e configurar o Spring Security
        http.authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll()
                ).csrf(AbstractHttpConfigurer::disable);
        return http.build();
    }
}
