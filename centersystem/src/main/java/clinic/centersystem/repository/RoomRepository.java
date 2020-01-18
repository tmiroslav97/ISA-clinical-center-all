package clinic.centersystem.repository;

import clinic.centersystem.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByClinic(Long id);
}
