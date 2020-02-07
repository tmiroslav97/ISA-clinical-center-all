package clinic.centersystem;

import clinic.centersystem.controller.RegistrationRequirementControllerIntegrationTest;
import clinic.centersystem.controller.RegistrationRequirementControllerUnitTest;
import clinic.centersystem.repository.RegistrationRequirementRepository;
import clinic.centersystem.repository.RegistrationRequirementRepositoryIntegrationTest;
import clinic.centersystem.repository.RegistrationRequirementRepositoryUnitTest;
import clinic.centersystem.service.RegistrationRequirementServiceIntegrationTest;
import clinic.centersystem.service.RegistrationRequirementServiceUnitTest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.test.context.TestPropertySource;

@RunWith(Suite.class)
@Suite.SuiteClasses({RegistrationRequirementControllerUnitTest.class, RegistrationRequirementServiceUnitTest.class, RegistrationRequirementRepositoryUnitTest.class,
        RegistrationRequirementControllerIntegrationTest.class, RegistrationRequirementServiceIntegrationTest.class, RegistrationRequirementRepositoryIntegrationTest.class})
public class TestSuite {


}
