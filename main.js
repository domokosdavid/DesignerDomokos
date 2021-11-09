function szovegFunkcio(){

    let szoveg = document.getElementById("szoveg").value;

    document.getElementById("elonezet").innerHTML = szoveg;

    if(szoveg == " " || szoveg == ""){
        
        document.getElementById("szovegLabel").style.color = "red";

        document.getElementById("szovegLabel").textContent = "A mintaszöveg nem lehet üres!";

    }
    else{

        document.getElementById("szovegLabel").style.color = "black";

        document.getElementById("szovegLabel").textContent = "Mintaszöveg:";

    }
    
}

function szovegSzinFunkcio(){

    let szovegszin = document.getElementById("szovegszin").value;

    document.getElementById("elonezet").style.color = szovegszin;

}

function betuMeretFunkcio(){

    let betumeret = document.getElementById("betumeret").value;

    document.getElementById("elonezet").style.fontSize = betumeret+"px";

}

function hatterSzinFunkcio(){

    let szin = document.getElementById("szin").value;

    document.getElementById("elonezet").style.background = szin;

    
}


var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);

function ujHozzaad() {

    var li = document.createElement("li");

    var bevittSzoveg = document.getElementById("szoveg").value;

    var t = document.createTextNode(bevittSzoveg);

    var szinSzoveg = document.getElementById("szovegszin").value;

    var meretSzoveg = document.getElementById("betumeret").value;

    var hatterSzoveg = document.getElementById("szin").value;


    li.appendChild(t);

    if (bevittSzoveg === '') {

    alert("Írj be valamit!");

    } else {

    document.getElementById("lista").appendChild(li);
    document.getElementById("lista").appendChild(li).style.color = szinSzoveg;
    document.getElementById("lista").appendChild(li).style.background = hatterSzoveg;
    document.getElementById("lista").appendChild(li).style.fontSize = meretSzoveg + "px";


    }

}