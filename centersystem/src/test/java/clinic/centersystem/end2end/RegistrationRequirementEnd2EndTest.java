package clinic.centersystem.end2end;

import clinic.centersystem.page.ClinicCenterAdminPage;
import clinic.centersystem.page.LoginPage;
import clinic.centersystem.page.RegistrationRequirementPage;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@TestPropertySource("classpath:application-test.properties")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class RegistrationRequirementEnd2EndTest {

    private WebDriver browser;

    private LoginPage loginPage;

    private ClinicCenterAdminPage clinicCenterAdminPage;

    private RegistrationRequirementPage registrationRequirementPage;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedrivers/chromedriver");
        browser = new ChromeDriver();

        browser.manage().window().maximize();
        browser.navigate().to("http://localhost:3000/login");

        loginPage = PageFactory.initElements(browser, LoginPage.class);
        clinicCenterAdminPage = PageFactory.initElements(browser, ClinicCenterAdminPage.class);
        registrationRequirementPage = PageFactory.initElements(browser, RegistrationRequirementPage.class);


        loginPage.ensureIsDisplayedTxtEmail();
        loginPage.getTxtEmail().sendKeys("tomic.miroslav97@gmail.com");
        loginPage.ensureIsDisplayedTxtPass();
        loginPage.getTxtPass().sendKeys("123");
        loginPage.ensureIsDisplayedBtnLogin();
        loginPage.getBtnLogin().click();

        clinicCenterAdminPage.ensureIsDisplayedBtnRegReqs();
        assertEquals("http://localhost:3000/ccadmin", browser.getCurrentUrl());
    }

    @Test
    public void approveRegistrationRequirement() throws InterruptedException {
        clinicCenterAdminPage.ensureIsDisplayedBtnRegReqs();
        clinicCenterAdminPage.getBtnRegReqs().click();

        registrationRequirementPage.ensureIsDisplayedRegReqPag();
        registrationRequirementPage.ensureIsDisplayedRegReqTable();
        int size = registrationRequirementPage.getRowsApprove().size();
        WebElement btn = registrationRequirementPage.getRowsApprove().get(0);
        btn.click();

        registrationRequirementPage.ensureIsDisplayedToastMsg();
        System.out.println(registrationRequirementPage.getToastMsg().getText());

        assertEquals(size - 1, registrationRequirementPage.getRowsApprove().size());

        assertEquals("http://localhost:3000/ccadmin/reg-req", browser.getCurrentUrl());
    }


    @After
    public void tearDown() {
        browser.close();
    }
}
