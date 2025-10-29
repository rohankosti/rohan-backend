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

// ------------------------------------------START--------------------------------------------------------

//fetch beckend url
const fetchshortendedURL = async () => {
  const response = await fetch("/links");
  const links = await response.json();
  console.log("links", links);

  const shorturl = document.getElementsByClassName("shorturl");
  console.log(shorturl);

  const list = document.getElementById("shortended_url");
  list.innerHTML = "";

  // Show All Links In JSON File
  //  for (const [shortCode,url] of Object.entries(links)) {
  //   const li = document.createElement('li');
  //   li.innerHTML=`<a href="/${shortCode}" target="_blank">
  //   ${window.location.origin}/${shortCode}</a> - ${url}`
  //   list.appendChild(li);
  //  }

  // Show Added Links In JSON File
  const entries = Object.entries(links);
  if (entries.length > 0) {
    const [shortCode, url] = entries[entries.length - 1]; // ✅ last added entry
    const li = document.createElement("li");
    // shorturl[0].style.display = "inline";
    li.innerHTML = `<a href="/${shortCode}" target="_blank">
  ${window.location.origin}/${shortCode}</a> - ${url}`;
    list.appendChild(li);
  }
};

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
        await fetchshortendedURL();
        // shorturl[0].style.display = "block";
        alert("Form Sumbited Succsessfully");
        e.target.reset();
      } else {
        const msg = await response.text();
        alert("❌ Error: " + msg);
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
    }
  }

  URL_SHORT();
});

// fetchshortendedURL(); last URl show
// -----------------------------------------END--------------------------------------------------------






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
// old method this method use .value method and uper jo hai vo ,new FormData , formdata.get() mehod only use form 
