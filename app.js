const input = document.querySelector('#input');
const resultat = document.querySelector('#resultat');
const unites = document.querySelector('#unites');
const unitesResultat = document.querySelector('#unitesResultat');


document.querySelector("#unites").style.color ="black";
var unitesValue, unitesResultatValue;
resultat.value

input.addEventListener('keyup', resultatFinal );
unites.addEventListener('change', resultatFinal );
unitesResultat.addEventListener('change', resultatFinal );

unitesValue = unites.value;
unitesResultatValue = unitesResultat.value;

function resultatFinal(){
 unitesValue = unites.value;
 unitesResultatValue = unitesResultat.value;

 x = parseInt(input.value);

 if(isNaN(x)){
   alert("Ceci n'est pas un nombre");
   return;
 }

  if((unitesValue === "Metre" && unitesResultatValue ==="Kilometre") || (unitesValue === "Gramme" && unitesResultatValue ==="Kilogramme")){
    resultat.value = Number(input.value)* 0.001;
  }else if((unitesValue === "Metre" && unitesResultatValue === "Centimetre") || (unitesValue === "Gramme" && unitesResultatValue ==="Centigramme")){
    resultat.value = Number(input.value)* 100;
  }else if((unitesValue === "Metre" && unitesResultatValue === "Metre") || (unitesValue === "Gramme" && unitesResultatValue ==="Gramme")){
    resultat.value = input.value;
  }

   if((unitesValue === "Kilometre" && unitesResultatValue ==="Metre") || (unitesValue === "Kilogramme" && unitesResultatValue ==="Gramme")){
    resultat.value = Number(input.value)* 1000;
  }else if((unitesValue === "Kilometre" && unitesResultatValue === "Centimetre") || (unitesValue === "Kilogramme" && unitesResultatValue ==="Centigramme")){
    resultat.value = Number(input.value)* 100000;
  }else if((unitesValue === "Kilometre" && unitesResultatValue === "Kilometre") || (unitesValue === "Kilogramme" && unitesResultatValue ==="Kilogramme")){
    resultat.value = input.value;
  }

   if((unitesValue === "Centimetre" && unitesResultatValue === "Metre") || (unitesValue === "Centigramme" && unitesResultatValue ==="Gramme")){
    resultat.value = Number(input.value)/100;
  }else if((unitesValue === "Centimetre" && unitesResultatValue  === "Kilometre") || (unitesValue === "Centigramme" && unitesResultatValue ==="Kilogramme")){
    resultat.value = Number(input.value)/100000;
  }else if((unitesValue === "Centimetre" && unitesResultatValue  === "Centimetre") || (unitesValue === "Centigramme" && unitesResultatValue ==="Centigramme")){
    resultat.value = input.value;
  }

  if (unitesValue ==="Heure" && unitesResultatValue ==="Minute"){
    resultat.value = Number(input.value)*60;
  }else if(unitesValue ==="Heure" && unitesResultatValue ==="Seconde"){
    resultat.value = Number(input.value)*3600;
  }else if(unitesValue ==="Heure" && unitesResultatValue ==="Heure"){
    resultat.value = input.value;
  }

  if (unitesValue ==="Minute" && unitesResultatValue ==="Heure"){
    resultat.value = Number(input.value)/60;
  }else if(unitesValue ==="Minute" && unitesResultatValue ==="Seconde"){
    resultat.value = Number(input.value)*60;
  }else if(unitesValue ==="Minute" && unitesResultatValue ==="Minute"){
    resultat.value = input.value;
  }

  if (unitesValue ==="Seconde" && unitesResultatValue ==="Heure"){
    resultat.value = Number(input.value)/3600;
  }else if(unitesValue ==="Seconde" && unitesResultatValue ==="Minute"){
    resultat.value = Number(input.value)/60;
  }else if(unitesValue ==="Seconde" && unitesResultatValue ==="Seconde"){
    resultat.value = input.value;
  }
}