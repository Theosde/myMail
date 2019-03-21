var count = document.getElementsByClassName('trash').length;
var trash = document.getElementsByClassName('trash');

document.getElementById("count").textContent = count;


for (var i = 0; i < count; i++) {
  trash[i].addEventListener("click",function(){
    this.parentNode.remove();

    console.log(document.getElementById("count").parentNode.textContent);

  if (document.getElementById("count").textContent == 1) {
    document.getElementById("count").parentNode.textContent = "Plus de Message";
  }else {
    document.getElementById("count").textContent = document.getElementsByClassName('trash').length;
  }

  });
}



document.getElementsByClassName("total")[0].addEventListener("click",function(){
  document.getElementsByClassName("row")[document.getElementsByClassName('trash').length].insertAdjacentHTML('afterend', '<div class="row"><img  class="avatar" src="link/avatar-1.jpg"><div><h6>Noel Paganelli</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, sed?</p></div><img class="trash" src="link/trash.png"></div>');
  document.getElementById("count").textContent = document.getElementsByClassName('trash').length;

})
