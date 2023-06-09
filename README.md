## Faker API

In this assignment, two JavaScript libraries will be used to create a simple API that generates _User_ and _Company_ objects depending on the requested route. The libraries are **Express** for the server and **Faker** for the random data generation. The goal is to start broadening our understanding of APIs.

### Faker
To add Faker to the project it needs to be installed via `npm`.
```
npm install @faker-js/faker
```

For more information, see [Faker's API documentation](https://fakerjs.dev/api/address.html#city).

### Steps Taken to Build This Project
**Before proceeding** ✋ Initialize Git repository before installing packages.

1. Inside the project directory create a **`server folder`**.
2. Change directory to **`server`** and install the `package.json` file with the terminal command:
    ```
    npm init -y
    ```
    The `package.json` file should look like this:
    ```json
    {
        "name": "server",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
    }
    ```
3. (Still inside **`server`**) Install Express and Faker:
    ```
    npm install express
    npm install @faker-js/faker
    ```
    The `package.json` file should _now_ look like this (for brevity, the contents prior were ommitted):
    ```json
    {
        "dependencies": {
            "@faker-js/faker": "^7.6.0",
            "express": "^4.18.2"
        }
    }
    ```
    This will not only install these dependencies, but now the files `package.json` and `node_modules` are also installed in the **`server`** directory. To not push `node_modules` into the repository. Do this by creating a `.gitignore` file and writing the following inside:
    ```py
    # dependencies
    /node_modules
    ```
### Creating Our Server
4. Still inside the **`server`** directory, create a file called `server.js` and write the following:
    ```js
    const express = require("express");
    const { faker } = require('@faker-js/faker');
    
    const app = express();
    const port = 8000;
    ```

5. Now we need to create two objects: _User_ and _Company_. Using the Faker API Documentation, we can find the right modules to generate the information we need.
    - for **`user`** object
        ```js
        id: .datatype.uuid()
        firstName: .name.firstName()
        lastName: .name.lastName()
        phoneNumber: .phone.number()
        email: .internet.email()
        password: .internet.password()
        ```
    - for **`company`** object
        ```js
        id: datatype.uuid()
        companyName: .company.name()
        address: {
            steet: .address.street()
            city: .address.cityName()
            zipCode: .address.zipCode()
            country: .address.country()
        }
        ```

6. After preparing the data generation, now we need a way to fetch it—By creating `api.get()` routes. The goal is to retrieve the following:
    - `/api/users/new`
    - `/api/companies/new`
    - `/api/user/company`
    
    The general format of the function is as such:
    ```js
    app.get("/api/enter-route-here", (request, response) => {
        const variableName = createdObjectName();
        response.json(variableName);
    });
    ```
    Of course, the function above will be tailored based on what each specific route is asking for. But this is how we will get the JSON information like that of an API.

7. After creating an api route for each, now we need the actual line of code that runs our server on the specified port. This should be the LAST line in the **`server.js`** file.
    ```js
    app.listen( port, () => console.log(`Listening on port: ${port}`) );
    ```

8. Now all the information is set to run the server and visit the route, `localhost:8000/api/enter-route-here`.
    ```
    node server.js
    ```
