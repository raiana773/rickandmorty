const API = "https://rickandmortyapi.com/api/character";
const APISHKA = "http://localhost:8001/characters";
console.log(APISHKA);
let app = document.getElementById("app");
async function rickandmorty() {
  let response = await fetch(API).then(res =>
    res.json().catch(err => console.log(error))
  );
  // console.log(response);
  response.results.forEach(element => {
    let names = document.createElement("div");

    names.style.border = "2px solid black";
    names.style.width = "300px";
    names.style.margin = "20px";
    names.style.padding = "5px";
    names.style.fontSize = "20px";
    names.style.color = "blue";

    names.id = element.id;
    names.innerHTML = `
    <div>Name: ${element.name}</div>
    <div><img src="${element.image}"/></div>
    `;
    async function dbjson() {
      let obj = {
        name: element.name,
        image: element.image,
      };
      // console.log(obj.image);
      await fetch(APISHKA, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      });
    }
    // dbjson();
    app.append(names);
  });
}
rickandmorty();

async function getSjonDb() {
  let getDb = await fetch(APISHKA)
    .then(response => response.json())
    .catch(error => console.log(error));

  for (let i = 0; i < getDb.length; i++) {
    // console.log(i.name);
    let divName = document.querySelector(".newName");
    let newNames = document.createElement("div");
    newNames.style.border = "2px solid black";
    newNames.style.width = "300px";
    newNames.style.margin = "20px";
    newNames.style.padding = "5px";
    newNames.style.fontSize = "20px";
    newNames.style.color = "red";

    newNames.innerHTML = `
    <div>${getDb[i].name}</div>
    <div><img src="${getDb[i].image}"></div>
    `;
    divName.append(newNames);
  }
}
getSjonDb();
