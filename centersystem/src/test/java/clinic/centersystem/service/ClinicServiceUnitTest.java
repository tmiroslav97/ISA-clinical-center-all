package clinic.centersystem.service;

import clinic.centersystem.model.Clinic;
import clinic.centersystem.repository.ClinicAdminRepository;
import clinic.centersystem.repository.ClinicRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ClinicServiceUnitTest {
    @Autowired
    ClinicServiceImpl clinicService;

    @MockBean
    ClinicRepository clinicRepositoryMocked;

    @Autowired
    ClinicAdminServiceImpl clinicAdminService;

    @MockBean
    ClinicAdminRepository clinicAdminRepository;

    @Before
    public void setUp() throws ParseException {
        MockitoAnnotations.initMocks(this);

        Clinic clinic = new Clinic(); clinic.setId(1L);
        Clinic clinic1 = new Clinic(); clinic1.setId(2L);

        List<Clinic> clinics = new ArrayList<>();
        clinics.add(clinic);
        clinics.add(clinic1);

        Mockito.when(clinicRepositoryMocked.findById(clinic.getId())).thenReturn(Optional.of(clinic));
        Mockito.when(clinicRepositoryMocked.findAll()).thenReturn(clinics);


    }

    @Test
    public void whenValidId_getById() {
        Long id = 1L;
        Clinic clinic = clinicService.findById(id);

        assertEquals(id, clinic.getId());
    }

    @Test
    public void whenValidId_getAll() {
        List<Clinic> clinics = clinicService.findAll();
        assertEquals(clinics.size(), 2);
    }
}
