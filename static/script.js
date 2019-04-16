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
