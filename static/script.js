function increase(){
  var pieces = document.getElementById("pieces").value;
  console.log(pieces);
  if(pieces >9){
    document.getElementById('error').innerHtml="Sorry you have reached maximum number of pieces to order";

  } else{
    pieces++;
  }
  console.log(pieces);
  return document.getElementById('pieces').setAttribute('value', pieces);
}
function decrease(){
  var pieces = document.getElementById("pieces").value;
  if(pieces < 1){
    document.getElementById('error').innerHtml="Sorry you have reached minimum number of pieces to order";
  } else{
    pieces--;
  }
  console.log(pieces);
  return document.getElementById('pieces').setAttribute('value', pieces);
}

function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}
function OnScroll(div) {
    var d1 = document.getElementById("image-scroll");
    d1.scrollTop = div.scrollTop;
}
