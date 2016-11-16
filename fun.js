function losujImie() {
    'use strict';
    var liczba, imie;
    imie = ['Arkadiusz','Adam', 'Jakub', 'Michal', 'Bartosz', 'Tomasz', 'Miroslav', 'Vadis', 'Nemanja','Radoslaw','Łukasz'];
    liczba = Math.floor(Math.random() * 10);
    return imie[liczba];
}
function losujNazwisko() {
    'use strict';
    var liczba, nazwisko;
    liczba = Math.floor(Math.random() * 10);
    nazwisko = ['Malarz', 'Hlousek', 'Rzeźniczak', 'Pazdan', 'Bereszyński', 'Jodłowiec', 'Radovic', 'Odjidja-Ofoe', 'Nikolic','Cierzniak','Fabianski' ];
    return nazwisko[liczba];
}
function usun() {
    'use strict';
    var elem, rodzic;
    elem = document.getElementsByName('generator')[0]; //Zwraca listę elementów w dokumencie o żądanym atrybucie name
    rodzic = elem.parentNode; // zwraca rodzica bieżącego elementu 
    rodzic.removeChild(elem); //Metoda removeChild usuwa węzeł potomny elementu (elem)
}
function stworzTab(i) {
    'use strict';
    var a;
	var tabela;
	var row;
	var cell;
	var noweImie;
	var noweNazwisko;
    tabela = document.createElement('div');
    tabela.className = "CaTab";
    row = document.createElement('div');
   // row.className = "TytulTabeli";
    //row.appendChild(document.createTextNode('Tabela'));
    tabela.appendChild(row); // wstawia określony węzeł na koniec listy dzieci określonego rodzica.
    row = document.createElement('div');
    row.className = "Rzad1";
    row.id = "Rzad1";
    tabela.appendChild(row);
    cell = document.createElement('div');
    cell.className = "K1";
    cell.appendChild(document.createTextNode('Lp.'));
    row.appendChild(cell);
    cell = document.createElement('div');
    cell.className = "K1";
    cell.appendChild(document.createTextNode('Imię'));
    row.appendChild(cell);
    cell = document.createElement('div');
    cell.className = "K1";
    cell.appendChild(document.createTextNode('Nazwisko'));
    row.appendChild(cell);
	
    cell = document.createElement('div');
    cell.className = "K1";
    cell.id = "cel";
    row.appendChild(cell);
	
	for (a = 0; a < i; a++) {
        noweImie = losujImie();
        noweNazwisko = losujNazwisko();
        row = document.createElement('div');
        row.className = "Row1";
	
        cell = document.createElement('div');
        cell.className = "K1";
        cell.appendChild(document.createTextNode(a + 1));
        row.appendChild(cell);
	
        cell = document.createElement('div');
        cell.className = "K1";
        cell.appendChild(document.createTextNode(noweImie));
        row.appendChild(cell);
	
        cell = document.createElement('div');
        cell.className = "K1";
        cell.appendChild(document.createTextNode(noweNazwisko));
        row.appendChild(cell);
        
        cell = document.createElement('div');
        cell.className = "K1";
        cell.setAttribute('contenteditable', 'true'); //dodaje nowy lub zmienia wartość atrybutu w bieżącym elemencie.
        row.appendChild(cell);
        tabela.appendChild(row);
    }
    document.getElementById('kontener').appendChild(tabela);
	document.getElementById('cel').innerHTML += '<button id=\'columnButton\' class=\'button\' onClick=\'dodaj()\'>Dodaj</button>';
	usun();
}
function dodaj() {
    'use strict';
	var nowa, i;
	nowa = document.createElement('div');
	nowa.className = "K1";
	nowa.setAttribute('contenteditable', 'true');
	document.getElementById('Rzad1').appendChild(nowa);
	for (i = 0; i < document.getElementsByClassName('Row1').length; i++) {
		nowa = document.createElement('div');
		nowa.className = "K1";
		nowa.setAttribute('contenteditable', 'true');
		document.getElementsByClassName('Row1')[i].appendChild(nowa);
	}
	document.getElementsByClassName('Rzad1')[0].lastChild.appendChild(document.getElementById('columnButton'));
}
	
