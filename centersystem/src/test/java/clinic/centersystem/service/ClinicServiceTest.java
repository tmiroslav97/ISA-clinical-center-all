package clinic.centersystem.service;

import clinic.centersystem.model.Clinic;


        import clinic.centersystem.model.Clinic;
        import org.junit.Test;
        import org.junit.runner.RunWith;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.test.context.SpringBootTest;
        import org.springframework.test.context.junit4.SpringRunner;

        import java.util.List;

        import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ClinicServiceTest {

    @Autowired
    private ClinicServiceImpl clinicService;

    @Test
    public void findAll(){
        List<Clinic> clinics = clinicService.findAll();
        assertEquals(clinics.size(),3);
    }

    @Test
    public void findById(){
        Clinic clinic  = clinicService.findById(1L);
        assertEquals(java.util.Optional.ofNullable(clinic.getId()),  java.util.Optional.of(1L));
        assertEquals(clinic.getName(),"Clinic Vlasenica");
    }

}
