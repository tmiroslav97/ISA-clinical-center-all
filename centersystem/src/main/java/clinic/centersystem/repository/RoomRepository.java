package clinic.centersystem.repository;

import clinic.centersystem.model.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    @Query("select r from Room r where lower(r.name) like lower(?1) and r.clinic.id=(?2)")
    List<Room> searchRooms(String name, Long clinicId);

    Page<Room> findByClinicId(Long id, Pageable pageable);
}