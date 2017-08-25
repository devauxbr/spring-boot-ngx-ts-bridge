package com.bdevaux.springbootngxtsbridge.resource;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("api")
@Component
public class JerseyApplication extends ResourceConfig {
    public JerseyApplication() {
        register(UserResource.class);
    }
}
