const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

const createProduct = () => {
    const newFakeProduct = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFakeProduct;
}

const newFakeProduct = createProduct();
console.log(newFakeProduct);

/*
    ? The output of the above console.log will look like this:
    {
        name: 'Anime Figurine',
        price: '$568.00',
        department: 'Tools'
    }
*/

