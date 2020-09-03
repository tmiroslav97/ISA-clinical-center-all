package clinic.centersystem.service;

import clinic.centersystem.model.Doctor;
import clinic.centersystem.repository.DoctorRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import javax.print.Doc;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DoctorServiceUnitTest {
    @Autowired
    DoctorServiceImpl doctorService;

    @MockBean
    DoctorRepository doctorRepositoryMocked;

    @Before
    public void setUp() throws ParseException {
        MockitoAnnotations.initMocks(this);

        Doctor doc = new Doctor(); doc.setId(1L);
        Doctor doc1 = new Doctor(); doc1.setId(2L);

        List<Doctor> doctors = new ArrayList<>();
        doctors.add(doc);
        doctors.add(doc1);

        Mockito.when(doctorRepositoryMocked.findById(doc.getId())).thenReturn(Optional.of(doc));
        Mockito.when(doctorRepositoryMocked.findAll()).thenReturn(doctors);
    }
    @Test
    public void whenValidId_getById() {
        Long id = 1L;
        Doctor doc = doctorService.findById(id);

        assertEquals(id, doc.getId());
    }

    @Test
    public void whenValidId_getAll() {
        List<Doctor> doctors = doctorService.findAll();
        assertEquals(doctors.size(), 2);
    }

}
