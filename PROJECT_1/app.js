// Note:-
// ✅ 1️⃣ FormData ek built-in JavaScript object hai
// Jo HTML form ke andar ke saare input fields ka data collect karta hai.

// ✅ 2️⃣ new FormData(form) —
// Ye form element (HTML tag <form>...</form>) leta hai
// aur uske andar ke har input ka name aur value pair store kar leta hai.
// Example:
// const form = document.getElementById("shortend_form");
// const formData = new FormData(form);

// ✅ 3️⃣ .get("name") —
// Ye specific input field ka value deta hai
// jiska name="..." attribute hota hai.

let shortend_form = document.getElementById("shortend_form");
// console.log(shortend_form);

shortend_form.addEventListener("submit", (e) => {
  e.preventDefault();

  //    const formdata = new FormData(e.target); optioninal
  const formdata = new FormData(shortend_form);
  // console.log(formdata);

  const url = formdata.get("url");
  const shortcode = formdata.get("custom_url");

  console.log(url, shortcode);

  async function URL_SHORT() {
    try {
      const response = await fetch("/urlshort", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url, shortcode }),
      });

      if (response.ok) {
        alert("Form Sumbited Succsessfully");
        Event.target.reset();
      }
    } catch (error) {
      console.error(error);
    }
  }

  URL_SHORT();
});

// const enter_url = document.getElementById("enter_url");
// console.log(enter_url);

// const custom_url = document.getElementById("custom_url");
// console.log(custom_url);

// const shortend_form = document.getElementById("shortend_form");
// console.log(shortend_form);

// shortend_form.addEventListener("submit",(e)=>{
//  e.preventDefault();

//    let data = enter_url.value;
//    console.log(data);

//    let url_data = custom_url.value;
//    console.log(url_data);

// });
// old method
