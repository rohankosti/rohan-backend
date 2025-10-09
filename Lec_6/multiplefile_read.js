const filesystem = require("fs").promises;
const path = require("path");

// let file = "data.txt";
// let filepath = path.join(__dirname);
// console.log(filepath);

// let f = filesystem.readdir(__dirname).then((files) => {
//   console.log(files);
//   // console.log(f);
//   files.forEach((e) => {
//     // console.log(e);

//     if (e.endsWith(".txt")) {
//       const txtpath = path.join(__dirname, e);
//     //   console.log(txtpath);

//       filesystem
//         .readFile(txtpath, "utf-8")
//         .then((data) => {
//           console.log("All Files:", data);
//         })
//         .catch((ero) => {
//           console.error(ero);
//         });
//     }
//   });
// });

//reddir return promise

filesystem.readdir(__dirname).then((file) => {
  //   console.log(file);
  for (const files of file) {
    // console.log(files);

    if (files.endsWith(".txt")) {
      const txtpath = path.join(__dirname, files);
      //  console.log(txtpath);
      filesystem
        .readFile(txtpath, "utf-8")
        .then((data) => {
          console.log(`Read File Sucssesfully:\n${data}`);
        })
        .catch((ero) => {
          console.error(ero);
        });
    }
  }
});
