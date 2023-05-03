const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

/* Create a User Object
    - id: .datatype.uuid()
    - firstName: .name.firstName()
    - lastName: .name.lastName()
    - phoneNumber: .phone.phoneNumber()
    - email: .internet.email()
    - password: .internet.password()
*/
const createUser = () => {
    const generatedUserData = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return generatedUserData
};


/* Create a Company Object
    - id: datatype.uuid()
    - name: .company.name()
    - address:
        - steet (an existing street): .address.streetName()
        - city (an existing city): .address.cityName()
        - zipCode: .address.zipCode()
        - country: .address.country()
*/
const createCompany = () =>({
    id: faker.datatype.uuid(),
    companyName: faker.company.name(),
    address: {
        street: faker.address.street(),
        cityName: faker.address.cityName(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
});

// /api/users/new
app.get("/api/users/new", (request, response) => {
    const newUser = createUser();
    response.json(newUser) // generates newUser data
});
// /api/companies/new
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});
// /api/user/company
app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const employeeData = {
        user: newUser,
        company: newCompany
    };
    res.json(employeeData);
});

app.listen( port, () => console.log(`Listening on port: ${port}`));