package clinic.centersystem.service;

import clinic.centersystem.model.Room;
import clinic.centersystem.repository.RoomRepository;
import clinic.centersystem.service.intf.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room findById(Long id) {
        return roomRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    @Override
    public Room save(Room room) {
        return roomRepository.save(room);
    }
}
