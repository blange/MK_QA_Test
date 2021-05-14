const data = require("./data.js");
const form = require("./form.js");
/*application test */
Feature("Submit App-flow");
/********************
 Business Appflow 
 ********************/
if (data.runPersonalTest) {
  data.cards.personal.forEach(function (product) {
    Scenario(product, ({ I }) => {
      let randBusiness = Math.floor(Math.random() * data.organizations.length);
      let randPerson = Math.floor(Math.random() * data.people.length);
      let randUser = randPerson;
      let randUser2 = randPerson;
      while (randUser == randPerson) {
         randUser = Math.floor(Math.random() * data.people.length);
      }
      while (randUser2 == randUser || randUser2 == randPerson) {
         randUser2 = Math.floor(Math.random() * data.people.length);
      } 
      let people = data.people[randPerson];
      let authorizedUser = data.people[randUser];
      let authorizedUser2 = data.people[randUser2]; 
      I.amOnPage("/personal/");
      I.wait(1);
      I.see("Apply for the right card and see what");
      I.click("Apply Now");
      I.wait(1);
      I.see('Cash Rewards World Visa');
      I.fillField('personalAmountCreditRequested', data.me.personalAmountCreditRequested);
      I.fillField('firstName', data.me.firstName); 
      I.fillField('lastName', data.me.lastName);
      form.address(data.me);
      I.checkOption('insiderOfVendor');
      I.click('Next');
      I.wait(1);
      I.see('Identity Information');
      form.verification(data.me); 
      form.identification(data.me);
      I.click('Next');
      I.wait(1);
      I.see('Contact Information');
      form.contact(data.me, "phoneNumbers[0].");
      I.click('Next');
      I.wait(1);
      I.see('Financial Information');
      form.financial(data.me, "employments[0]."); 
      form.address(null, "employments[0].", false);
      I.checkOption('jointCredit');
      I.click('Add a Co-Applicant');
      I.wait(1);
      I.see('Co-Applicant');
      form.coapplicant(people,"coApplicant.");
      I.fillField('coApplicant.addressYears', 10);
      I.fillField('coApplicant.addressMonths', 6); 
      I.checkOption('coApplicant.insiderOfVendor');
      I.click('Next');
      I.wait(1); 
      I.see('Co-Applicant');
      I.see('Identity Information'); 
      form.verification(people, "coApplicant."); 
      form.identification("","coApplicant.");
      I.click('Next');
      I.see('Contact Information'); 
      form.cocontact(people, "coApplicant."); 
      I.click('Next');
      I.wait(1);
      I.see('Co-Applicant');
      I.see('Financial Information');
      form.financial("", "coApplicant.");
      form.address(null, "coApplicant.employments[0].", false);
      I.seeElement({name: 'coApplicant.jointCredit'});
      I.checkOption({name: 'coApplicant.jointCredit'});
      I.click('Next');
      I.wait(1);
      I.see('Options');
      I.click('#addAuthorizedUser');
      form.coapplicant(authorizedUser, "authorizedUsers[0].");
      form.coverification(authorizedUser, "authorizedUsers[0].");
      form.address(authorizedUser, "authorizedUsers[0].");
      I.click('Add Authorized User');
      I.seeElement({name: 'authorizedUsers[1].relationToPrimaryApplicant'});
      form.coapplicant(authorizedUser2, "authorizedUsers[1].");
      form.coverification(authorizedUser2, "authorizedUsers[1].");
      form.address(authorizedUser2, "authorizedUsers[1].");
      I.click("Next");
      I.wait(1);
      I.see("Review");
      I.click("Next");
      I.wait(1); 
      I.see("Agreements");
      I.click("Sign and Continue");
      I.wait(1);
      I.see("Interest Rates and Interest Charges");
      I.click("Sign and Continue");
      I.wait(1);
      I.see("Agreements");
      I.click("Sign and Submit");
      I.wait(1);
      I.see("We appreciate your patience.");
      I.wait(10);
      I.click("Skip");
      I.wait(1);
      I.see("Please verify your identity");
      I.click("Start");
      I.wait(1);
      I.checkOption("None of the Above");
      I.click("Next");
      I.wait(1); 
      I.see("Please verify your identity");
      I.checkOption("None of the Above");
      I.click("Next");
      I.wait(1); 
      I.checkOption("None of the Above");
      I.click("Submit");
      I.wait(3);
      I.see("Thank you for applying.");
      return
    })
})
}
