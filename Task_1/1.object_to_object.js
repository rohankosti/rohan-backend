const filesystem = require("fs");
const { readFile } = require("node:fs/promises");
const readline = require("node:readline/promises");
const path = require("path");

let filepath = path.join(__dirname, "product.json");

let products = {
  data1: {
    name: "samsung s24 ultra",
    color: "black",
    price: "50,000",
  },
  data2: {
    name: "iphone 17",
    color: "orange",
    price: "80,000",
  },
};

let newProduct = {
  data3: {
    name: "iphone 16",
    color: "black",
    price: "60,000",
  },
};

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function new_obj() {
  try {
    let obj1 = await rl.question("Enter product name: ");
    let obj2 = await rl.question("Enter product color: ");
    let obj3 = await rl.question("Enter product price: ");

    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
    rl.close();

    newobj = {
      data4: {
        name: obj1,
        color: obj2,
        price: obj3,
      },
    };

    const newobjread = await filesystem.promises.readFile(filepath, "utf-8");
    // console.log(newobjread);
    let newobjdata = JSON.parse(newobjread);
    console.log(newobjdata);
  } catch (error) {
    console.error(error);
  }
}

async function writeInitial() {
  try {
    await filesystem.promises.writeFile(
      filepath,
      JSON.stringify(products, null, 2),
      "utf-8"
    );
    console.log("Initial products written!");
  } catch (err) {
    console.error(err);
  }
}

async function addNewProduct() {
  try {
    const response = await filesystem.promises.readFile(filepath, "utf-8");
    let data = JSON.parse(response);
    const updatedData = { ...data, ...newProduct, ...newobj };
    await filesystem.promises.writeFile(
      filepath,
      JSON.stringify(updatedData, null, 2),
      "utf-8"
    );
    console.log("Data appended successfully!");
  } catch (err) {
    console.error(err);
  }
}

// First write initial products
new_obj().
then(() => {
  writeInitial().
  then(() => {
    addNewProduct();
  });
});