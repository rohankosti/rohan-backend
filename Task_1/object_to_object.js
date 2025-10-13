const filesystem = require("fs");
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
    const updatedData = { ...data, ...newProduct };
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
writeInitial().then(() => {
  // Then add new product
  addNewProduct();
});
