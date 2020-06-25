var name = "Abiral Sawhney 🚀"; 
var i = 0;

function typeName () {
  var nameHeader = document.getElementById("nametag");
  console.log(nameHeader);
  nameHeader.innerHTML = nameHeader.innerHTML + name.charAt (i);
  i = i + 1;
  setTimeout(typeName, 200);
}


window.onload = typeName;