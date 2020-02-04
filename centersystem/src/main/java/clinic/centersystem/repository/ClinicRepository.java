package clinic.centersystem.repository;

import clinic.centersystem.model.Clinic;
import org.joda.time.DateTime;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClinicRepository extends JpaRepository<Clinic, Long> {
    boolean existsByName(String name);

    @Query("select cl from Clinic cl, AppointmentType at, Doctor doc, Calendar cal, CalendarItem ci where at.")
    List<Clinic> findAll(DateTime dt, Float rating, String type);

    Page<Clinic> findAll(Pageable pageable);
}
