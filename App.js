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
  var inputValue = document.getElementById("myInput1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Sinun täytyy kirjoittaa jotakin!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput1").value = "";

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

document.getElementById("addBtn").addEventListener("click", tallenna);
document.getElementById("display-btn").addEventListener("click", hae);

// Tiedon tallennus Local storageen

function tallenna() {
    console.log("Tallennettu.")
    var n = document.getElementById("MyInput1").value;
    data = { tehtävä: n};
    var old = JSON.parse(localStorage.getItem('tiedot'))||[];
    old.push(data);
    localStorage.setItem('tiedot', JSON.stringify(old));    
}

function näytä() {
    console.log("Näytetään.")
    var list = "<table><tr><th>Tehtävä </th></tr>\n";
    var parsed = JSON.parse(localStorage.getItem('tiedot'));
    for( i = 0; i <= parsed.length - 1; i++) {
        console.log(i + ' = ' + parsed[i].tehtävä);
        list += "<tr><td><i>" + parsed[i].tehtävä + "</i></td>\n";
    }
    list += "</table>";
    document.querySelector(".display-area").innerHTML = list;
}
