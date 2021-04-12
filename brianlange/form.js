global.d = require("./data.js"); 
const I = actor();

module.exports = {
  address(data = "", namePrefix = "", duration = true) {
    if (data) { 
      I.fillField(`${namePrefix}address1`, data.address1);
      I.fillField(`${namePrefix}postalCode`, data.postalCode);
      I.selectOption(`${namePrefix}state`, data.state);
    } else {
      I.fillField(`${namePrefix}address1`, d.commonVariables[0].employmentAddress1);
      I.fillField(`${namePrefix}postalCode`, d.commonVariables[0].employmentPostalCode);
      I.selectOption(`${namePrefix}state`, d.commonVariables[0].employmentState);
    }
    if (duration) {
      I.fillField(`${namePrefix}addressYears`, d.commonVariables[0].addressDurationYears);
      I.fillField(`${namePrefix}addressMonths`, d.commonVariables[0].addressDurationMonths);
    }
  }, 
  identification(data = "", namePrefix = "") {
    if (data) {
      I.selectOption(`${namePrefix}idType`, d.commonVariables[0].coIdType);
      I.selectOption(`${namePrefix}issuedBy`, data.FIELD13);
      I.fillField(`${namePrefix}idValue`, data.idValue);
      I.fillField(`${namePrefix}issueDate`, data.issueDate);
      I.fillField(`${namePrefix}expireDate`, data.expireDate);
    } else {
       I.selectOption(`${namePrefix}idType`, d.commonVariables[0].coIdType);
       I.selectOption(`${namePrefix}issuedBy`, d.commonVariables[0].coAppIssuedBy);
       I.fillField(`${namePrefix}idValue`, d.commonVariables[0].coAppIdNum);
       I.fillField(`${namePrefix}issueDate`, d.commonVariables[0].coAppIssueDate);
       I.fillField(`${namePrefix}expireDate`, d.commonVariables[0].coAppExDate); 
    }
  },
  verification(data, namePrefix = "") {
    I.fillField(`${namePrefix}birthDate`, data.birthDate);
    I.fillField(`${namePrefix}socialSecurityNumber`, data.socialSecurityNumber);
    I.fillField('citizenships[0]', d.commonVariables[0].countryofCitizenship);
    I.pressKey('ArrowDown');
    I.pressKey('Enter');
  },
  coverification(data, namePrefix = "") {
    I.fillField(`${namePrefix}birthDate`, data.birthDate);
    I.fillField(`${namePrefix}socialSecurityNumber`, data.co_socialSecurityNumber);
  }, 
  contact(data, namePrefix = "") {
    I.fillField(`${namePrefix}contactNumber`, data.primaryContactNumber);
    I.selectOption(`${namePrefix}telecomContactMechPurposeId`, data.primaryPhoneType);
    I.fillField(`emailAddress`, data.emailAddress); 
    I.fillField(`verifyEmailAddress`, data.emailAddress);
  },
  cocontact(data, namePrefix = "") { 
    I.fillField(`${namePrefix}phoneNumbers[0].contactNumber`, data.co_primaryPhoneNumber);
    I.selectOption(`${namePrefix}phoneNumbers[0].telecomContactMechPurposeId`, d.commonVariables[0].coPrimaryPhoneType);
    I.fillField(`${namePrefix}emailAddress`, d.commonVariables[0].emailAddress);
    I.fillField(`${namePrefix}verifyEmailAddress`, d.commonVariables[0].emailAddress);
  },
  financial(data, namePrefix="") {
    if (data){
      I.selectOption(`residenceStatusEnumId`, data.housingType); 
      I.fillField(`housingPayment`, data.housingPayment);
      I.fillField(`occupation`, data.occupation);
      I.selectOption(`${namePrefix}employmentStatusEnumId`, data.employmentStatus); 
      I.fillField(`${namePrefix}employerName`, data.employerName);
      I.fillField(`${namePrefix}title`, data.title);
      I.fillField(`${namePrefix}monthlyIncome`, data.monthlyIncome);
      I.fillField(`${namePrefix}years`, data.employmentYears);
      I.fillField(`${namePrefix}months`, data.employmentMonths);
    } else {
      I.selectOption(`${namePrefix}residenceStatusEnumId`, d.commonVariables[0].housingType);
      I.fillField(`${namePrefix}housingPayment`, d.commonVariables[0].monthlyPayment);
      I.selectOption(`${namePrefix}employments[0].employmentStatusEnumId`, d.commonVariables[0].employmentStatus);
      I.fillField(`${namePrefix}occupation`, d.commonVariables[0].occupation);
      I.fillField(`${namePrefix}employments[0].employerName`, d.commonVariables[0].employerName);
      I.fillField(`${namePrefix}employments[0].title`, d.commonVariables[0].employmentTitle);
      I.fillField(`${namePrefix}employments[0].monthlyIncome`, d.commonVariables[0].employmentMonthlyIncome);
      I.fillField(`${namePrefix}employments[0].years`, d.commonVariables[0].employmentDurationYears);
      I.fillField(`${namePrefix}employments[0].months`, d.commonVariables[0].employmentDurationMonths);
    }
  },
  coapplicant(data, namePrefix = "") {
	I.selectOption(`${namePrefix}relationToPrimaryApplicant`, data.co_relation);
        I.fillField(`${namePrefix}firstName`, data.co_firstName);
        I.fillField(`${namePrefix}middleName`, data.co_middleName);
        I.fillField(`${namePrefix}lastName`, data.co_lastName);      
  }
};
