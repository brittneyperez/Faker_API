const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

// createUser
/* Create a User Object
    - id: .datatype.uuid()
    - firstName: .name.firstName()
    - lastName: .name.lastName()
    - phoneNumber: .phone.phoneNumber()
    - email: .internet.email()
    - password: .internet.password()
*/

// createCompany
/* Create a Company Object
    - id: datatype.uuid()
    - name: .company.companyName()
    - address:
        - steet (an existing street): .address.streetName()
        - city (an existing city): .address.cityName()
        - zipCode: .address.zipCode()
        - country: .address.country()
*/

// /api/users/new
// /api/companies/new
// /api/user/company
