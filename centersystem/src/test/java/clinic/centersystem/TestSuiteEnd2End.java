package clinic.centersystem;

import clinic.centersystem.controller.RegistrationRequirementControllerUnitTest;
import clinic.centersystem.end2end.RegistrationRequirementEnd2EndTest;
import clinic.centersystem.repository.RegistrationRequirementRepositoryUnitTest;
import clinic.centersystem.service.RegistrationRequirementServiceUnitTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({RegistrationRequirementEnd2EndTest.class})
public class TestSuiteEnd2End {
}
