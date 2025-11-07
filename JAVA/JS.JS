//1. zmienne służa do przechowania daych

// lat zmnenna której wartość można zmienić

//var - stary sposób lepiej uzywać let i const

// const stała której  wartości sie nie mozna zmienić

let imie = "jan";

const nazwisko = "kowalski";

var wiek = "23";

let miasto = "warszawa";

let liczba = "54";
//boolean prawa falsz
let czyliuczen = 'true';
//----------------------------------------------------------------------------------
//matma 
let suma = 10 + 5 //wynik 15

lat roznica = 23 - 21

let oblczyn 5 * 4

let iloraz = 10 / 4
//-------------------------------------------------------------------------pentla
//wyswietla w knsoli (f12)

functionn powitanie() {
    alert("witaj");

//funkcja bez parametrów

}
//funkcja z parametrami
function obliczSume(a, b) {
    return a + b;
// retrun  zwraca wynik z funkcji
}
//(jeżeli) instrukcja warunkowa
function sprawdzWiek(wiek){
    (wiek >=18){
        return "możesz";
      }  else {
            return "nie możesz";
        }
    }
//---------------------------------------------------------------
function liczodjednegodon(n) {

    let wynik = "";
//for petla zaczyna od 1 a konczy na N ZWIEKRZA O 1
    for (let 1 = 1; i <= n; i++)
{ wynik += 1 +" "; 

}
//zwraca wynik
return wynik;
}
//-----------------------------------------------------------------------
//czekamy aż cala strona się zaladuje
document.addEventListener('DOMContentLoaded', function() {

    const btnpowitanie = document.querySelector('#btnpowitanie');
    const btnobliczanie = document.querySelector('#btnobliczanie');
    const btnwiek = document.querySelector('#btnwiek');
    const btnpetla = document.querySelector('#btnpetla');
    const divwynik = document.querySelector('wynik');
   btnpowitanie.addEventListener('click', function(){
    let liczba1 = promt("podaj liczbe ");
    let liczba2 = promt("podaj druga liczbe");
    liczba1 = parseInt(liczba1);
    liczba2 = parseInt(liczba2);


    let wynikobliczen = obliczsume(liczba1, liczba2)

    divwynik.innerHTML = "<h3> obliczania</h3>" + liczba1 + " + " + liczba2 + " = " 
 + wynikobliczen + "</p>";
  };
   btnwiek.addEventListener('click'), function() {
    let wiekużytkownika = promt("ile masz lat");

    wiekużytkownika = parseInt(wiekużytkownika);
  let komunikat = sprawdzWiek(wiekużytkownika);


divwynik.innerHTML = "<h3> sprawdzanie wieku </h3><p>masz" + wiekużytkownika + 
}};
btnpetla.addEventListener('click', function() {
    
    let ile = prompt("do jakiej liczbt policzyć?");
    
    ile = parseInt(ile); 

    let liczbt = liczodjednegodon(ile);

    divwynik.innerHTML = "<h3>liczby od 1 do " + ile + "</h3><p>" + liczby + "</p.";

});