var count = document.getElementsByClassName('trash').length;
var trash = document.getElementsByClassName('trash');

document.getElementById("count").textContent = count;


for (var i = 0; i < count; i++) {
  trash[i].addEventListener("click",function(){
    this.parentNode.remove();
    console.log(document.getElementById("count").parentNode.textContent);
    document.getElementById("count").textContent = document.getElementsByClassName('trash').length;

  });

}

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

document.getElementById("add").addEventListener("click",function(){

  function aleatoire(size) {
      var liste = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
      var result = '';
      for (i = 0; i < size; i++) {
          result += liste[Math.floor(Math.random() * liste.length)];
      }
      return result;
  }

  aleatoire(6)

  var nom = aleatoire(6)[0].toUpperCase()+aleatoire(6);
  var premon = aleatoire(6)[0].toUpperCase()+aleatoire(6);
  console.log(nom + " " +premon);


if (document.getElementById("message").value == "") {
  alert("PAS DE MESSAGE");

}else {
  document.getElementsByClassName("addmessage")[0].insertAdjacentHTML('afterend', '<div class="row"><img  class="avatar" src="link/avatar-'+getRandomNum(1,5)+'.jpg"><div><h6>'+nom + "   " +premon+'</h6><p>' + document.getElementById("message").value + '</p></div><img class="trash" src="link/trash.png"></div>');
  document.getElementById("count").textContent = document.getElementsByClassName('trash').length;
  document.getElementById("message").value = ""
}




    trash[0].addEventListener("click",function(){
      this.parentNode.remove();
      console.log(document.getElementById("count").parentNode.textContent);
      document.getElementById("count").textContent = document.getElementsByClassName('trash').length;

    });

})
