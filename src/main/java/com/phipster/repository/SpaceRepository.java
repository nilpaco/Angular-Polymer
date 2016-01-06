package com.phipster.repository;

import com.phipster.domain.Space;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Space entity.
 */
public interface SpaceRepository extends JpaRepository<Space,Long> {

}
