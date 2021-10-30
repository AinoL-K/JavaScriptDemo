// Sulkunappi jokaiselle listan kohteelle
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Piilotetaan listan tehtäviä nappia painamalla
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Merkitään klikkaamalla tehtävä hoidetuksi
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Lisätään listaan uusi tehtävä painamalla lisää nappia
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Sinun täytyy kirjoittaa jotakin!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


document.getElementById("register-btn").addEventListener("click", tallenna);
document.getElementById("display-btn").addEventListener("click", hae);

// Functions

function tallenna() {
    console.log("Tallennetaan...")
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    daatta = { nimi: n, email: e };
    var old = JSON.parse(localStorage.getItem('tiedot'))||[]; //haetaan ja parsitaan muuttujaan old olemassaolevan LocalStoragen sisältö
    old.push(daatta);
    localStorage.setItem('tiedot', JSON.stringify(old));
    
}

function hae() {
    console.log("Haetaan")
    var list = "<table><tr><th>Nimi </th><th> Email</th></tr>\n";
    var parsed = JSON.parse(localStorage.getItem('tiedot'));
    for( i = 0; i <= parsed.length - 1; i++) {
        console.log(i + ' = ' + parsed[i].nimi + " " + parsed[i].email);
        list += "<tr><td><i>" + parsed[i].nimi + "</i></td>\n<td><i>" + parsed[i].email + "</i></td></tr>\n";
    }
    list += "</table>";
    document.querySelector(".display-area").innerHTML = list;
}
