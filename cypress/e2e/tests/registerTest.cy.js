import register from '../../pages/registerPage'
import registerData from '../../fixtures/registerData.json'
import registerPage from '../../pages/registerPage';
describe('Test Automation',()=>{


    it('register flow',()=>{
        register.openURL();
        register.enterFirstName(registerData.firstName);
        register.enterLastName(registerData.lastName);
        register.enterEmail(registerData.email);
        register.enterTelephone(registerData.telephone);
        register.enterPassword(registerData.password);
        registerPage.enterConfirmPassword(registerData.password);
        register.selectCheckBox();
        register.clickOnContinue();

    })
})