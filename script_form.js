function poleTekstowe(tekst){
	if( /[A-Z]/.test( tekst[0]))
	{
		if(/^[a-z]+$/.test(tekst.substring(1)))
		{
			return 1;
		}
		else{
			alert("wprowadz tylko litery");
			return 0;
		}
	}
	else
	{
		alert("Pierwsza litera musi być duża");
		return 0;
	}
}
function wypelnijWiek(){
	var x = new Date(document.getElementById("urDat").value).getFullYear();
	document.getElementById("wiekId").value = (2016 - x);
	if((2016 - x) < 0){
		alert("wiek nie moze byc ujemny");
		return 0;
	}
	else if(document.getElementById("wiekId").value){
		alert("wpisz poprawnie date urodzenia");
		return 0;
	}else
		return 1;
}
function sprawdzPesel() {
	'use strict';
	var x = document.getElementById("peselId").value;
	var rok = x[0] + x[1];
	var mies = x[2] + x[3];
	var dzien = x[4] + x[5];
	
	if(parseInt(mies) < 1 || parseInt(mies) > 12){
		alert("zle wpisany miesiac");
		return 0;
	}
	
	if(parseInt(mies)%2 == 2){
		if(parseInt(rok)%4 == 0){
			if(parseInt(dzien) < 1 || parseInt(dzien) > 29){
				alert("zly dzien");
				return 0;
			}
			else{
				return 1;
			}
		}else{
			if(parseInt(dzien) < 1 || parseInt(dzien) > 28){
				alert("zly dzien");
				return 0;
			}
			else{
				return 1;
			}
		}
	}
	
	else if(parseInt(mies)%2 != 0){
		if(parseInt(mies) < 8){
			if(parseInt(dzien) < 1 || parseInt(dzien) > 31){
				alert("zly dzien");
				return 0;
			}
			else{
				return 1;
			}
		}else{
			if(parseInt(dzien) < 1 || parseInt(dzien) > 30){
				alert("zly dzien");
				return 0;
			}
			else{
				return 1;
			}
		}
	}else{
		if(parseInt(mies) < 8){
			if(parseInt(dzien) < 1 || parseInt(dzien) > 30){
				alert("zly dzien");
				return 0;
			}
			else{
				return 1;
			}
		}else{
			if(parseInt(dzien) < 1 || parseInt(dzien) > 31){
				alert("zly dzien");
				return 0;
			}
			else{
				return 1;
			}
		}
	}	
}
function MaxRozmiar() {
    'use strict';
    var wartoscOpis;
	document.getElementById("licznik").value = document.getElementById("licznik").value - 1;
    if (document.getElementById("kom").value.length >= 255) {
    } else {
    }
    document.getElementById("licznik").value = 255 - document.getElementById("kom").value.length;
}
function tylkoCyfry(e){
	e = e.which||event.keyCode;
	return (e>47&&e<58 || e==8 );
}
function sprawdz(){
	if(tylkoLitery(document.getElementById("imieId").value) == 0){
		alert("imie nieprawidlowe");
		return false;
	}
	if(tylkoLitery(document.getElementById("nazwiskoId").value) == 0){
		alert("nazwisko nieprawidlowe");
		return false;
	}
	if(aktualizujWiek() == 0){
		alert("wiek nieprawidlowy");
		return false;
	}
	if(sprawdzPesel() == 0){
		alert("Pesel nieprawidłowy");
		return false;
	}
	else{
		alert("wyslano formularz");
		return true;
	}
	alert("p");
}
