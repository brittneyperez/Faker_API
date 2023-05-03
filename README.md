## Faker API

In this assignment, two JavaScript libraries will be used to create a simple API that generates _User_ and _Company_ objects depending on the requested route. The libraries are **Express** for the server and **Faker** for the random data generation. The goal is to start broadening our understanding of APIs.

### Faker
To add Faker to the project it needs to be installed via `npm`.

```
npm install @faker-js/faker
```

For more information, see [Faker's API documentation](https://fakerjs.dev/api/address.html#city).

### Steps Taken to Build This Project
**Before you proceed** ✋ Initialize Git repository before installing packages.

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

5. 