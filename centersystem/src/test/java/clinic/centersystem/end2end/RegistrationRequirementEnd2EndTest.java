package clinic.centersystem.end2end;

import clinic.centersystem.page.ClinicCenterAdminPage;
import clinic.centersystem.page.LoginPage;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@TestPropertySource("classpath:application-test.properties")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RegistrationRequirementEnd2EndTest {

    private WebDriver browser;

    private LoginPage loginPage;

    private ClinicCenterAdminPage clinicCenterAdminPage;

    @BeforeMethod
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedrivers/chromedriver");
        browser = new ChromeDriver();

        browser.manage().window().maximize();

        browser.navigate().to("http://localhost:3000/login");

        loginPage = PageFactory.initElements(browser, LoginPage.class);
        clinicCenterAdminPage = PageFactory.initElements(browser, ClinicCenterAdminPage.class);

        loginPage.ensureIsDisplayedTxtEmail();
        loginPage.getTxtEmail().sendKeys("tomic.miroslav97@gmail.com");
        loginPage.ensureIsDisplayedTxtPass();
        loginPage.getTxtPass().sendKeys("123");
        loginPage.ensureIsDisplayedBtnLogin();
        loginPage.getBtnLogin().click();

        assertEquals("http://localhost:3000/ccadmin", browser.getCurrentUrl());
    }

    @Test
    public void approveRegistrationRequirement() throws InterruptedException {
        clinicCenterAdminPage.ensureIsDisplayedBtnRegReqs();
        clinicCenterAdminPage.getBtnRegReqs().click();

        assertEquals("http://localhost:3000/ccadmin/reg-req", browser.getCurrentUrl());
    }


    @AfterMethod
    public void tearDown() {
        browser.close();
    }
}
