// JavaScript: Loops

// For Loop
const family = ["Chinnu", "Gnapika", "Veda", "Renu", "Yarasu"];
for (let x = 0; x < family.length; x++) {
  if (x === 2) continue;
  console.log(family[x]);
  //   if (x === 3) break; //break statement
}
