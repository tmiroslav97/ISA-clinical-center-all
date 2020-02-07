package clinic.centersystem;

import clinic.centersystem.controller.RegistrationRequirementControllerUnitTest;
import clinic.centersystem.service.RegistrationRequirementServiceUnitTest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.test.context.TestPropertySource;

@RunWith(Suite.class)
@Suite.SuiteClasses({RegistrationRequirementControllerUnitTest.class, RegistrationRequirementServiceUnitTest.class})
public class TestSuite {


}
