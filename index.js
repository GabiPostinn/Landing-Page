console.log("Skill Brain Sienna HomeWork!");

// TEMA 1
function esteDivizibilCu10(numar) {
  return numar % 10 === 0;
}
console.log(esteDivizibilCu10(100));
console.log(esteDivizibilCu10(21));

// TEMA 2
function tellFortune(loculDeMunca, locatieGeografica, numePartener, numarCopii) {
  return "Vei fi un " + loculDeMunca + " In " + locatieGeografica + ", casatorit cu " + numePartener + " si vei avea " + numarCopii + " copii. ";
}
console.log(tellFortune("Front End Developer", "America", "Andreea", "3"));
console.log(tellFortune("Padurar", "Romania", "Nimeni", "0"));

//TEMA 3
function ziuaSaptamanii(numarZi) {
  switch (numarZi) {
    case 1:
      return "Luni";
    case 2:
      return "Marti";
    case 3:
      return "miercuri";
    case 4:
      return "joi";
    case 5:
      return "vineri";
    case 6:
      return "sambata";
    case 7:
      return "duminica";
    default:
      return "De cand saptamana are mai mult de 7 Zile?? Scrie un numar de la 1 la 7.";
  }
}

console.log(ziuaSaptamanii(1));
console.log(ziuaSaptamanii(2));
console.log(ziuaSaptamanii(3));
console.log(ziuaSaptamanii(4));
console.log(ziuaSaptamanii(5));
console.log(ziuaSaptamanii(6));
console.log(ziuaSaptamanii(7));
console.log(ziuaSaptamanii(8));

//TEMA 4

//Varianta cu IF - uri

function nevoiePermis(kind) {
  if (kind === "masina") {
    return true;
  } else if (kind === "camion") {
    return true;
  } else {
    return false;
  }
}

// Varianta cu Switch care mi se pare mult mai Eazy

function needsLicense(kind) {
  switch (kind) {
    case "car":
      return true;
    case "truck":
      return true;
    default:
      return false;
  }
}
// IF - uri
console.log(nevoiePermis("masina"));
console.log(nevoiePermis("bicicleta"));
console.log(nevoiePermis("camion"));
console.log(nevoiePermis("tractor"));

// Switch - uri
console.log(needsLicense("Bike"));
console.log(needsLicense("Skateboard"));
console.log(needsLicense("car"));
console.log(needsLicense("truck"));

//TEMA 5
function alegeMasina(option1, option2) {
  if (option1 < option2) {
    return `${option1} este clar optiunea mai buna!`;
  } else {
    return `${option2} este clar optiunea mai buna!`;
  }
}
console.log(alegeMasina("Bmw", "Mercedes"));
console.log(alegeMasina());
