var faker = require('faker');

var database = { items: []};

for (var i = 1; i<= 300; i++) {
  database.items.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    imageUrl: "https://source.unsplash.com/1600x600/?product",
  });
}

console.log(JSON.stringify(database));