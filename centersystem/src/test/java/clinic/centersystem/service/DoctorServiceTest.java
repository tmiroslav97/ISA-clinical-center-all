package clinic.centersystem.service;

import clinic.centersystem.model.Doctor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DoctorServiceTest {

    @Autowired
    DoctorServiceImpl doctorService;

    @Test
    public void findAll(){
        List<Doctor> doctors = doctorService.findAll();
        assertEquals(doctors.size(),3);
    }

    @Test
    public void findById(){
        Doctor doc = doctorService.findById(3L);
        assertEquals(doc.getFirstName(),"Nevena");
        assertEquals(doc.getLastName(), "Djukin");
        assertEquals(doc.getEmail(), "nvndjukin97@gmail.com");
    }
}
