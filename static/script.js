// Function to increase number of pieces selected
function increase(){
  document.getElementById('result').innerHTML="";
  document.getElementById('error').innerHTML="";
  var pieces = document.getElementById("pieces").value;
  console.log(pieces);
  if(pieces >9){
    console.log("error: Sorry you have reached maximum number of pieces to order ")
    document.getElementById("error").innerHTML = "Sorry you have reached maximum number of pieces to order";

  } else{
    pieces++;
  }
  console.log(pieces);
  return document.getElementById('pieces').setAttribute('value', pieces);
}
// TODO: Decrease number of pieces selected
function decrease(){
  document.getElementById('result').innerHTML="";
  document.getElementById('error').innerHTML="";
  var pieces = document.getElementById("pieces").value;
  if(pieces < 1){
    console.log("Sorry you have reached minimum number of pieces to order");
    document.getElementById('error').innerHTML= "Sorry you have reached minimum number of pieces to order";
  } else{
    pieces--;
  }
  console.log(pieces);
  return document.getElementById('pieces').setAttribute('value', pieces);
}
// TODO: open the side menu
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}
// TODO: close side menu bar
function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}
// TODO: scroll two different divs
// function OnScroll(div) {
//     var d1 = document.getElementById("image-scroll");
//     d1.scrollTop = div.scrollTop;
// }
// TODO: Submit form data
function submitForm(){
  document.getElementById('result').innerHTML="";
  var selected = document.getElementById('sizes');
  if(selected == null){
    console.log("Please select a size");
  }
  else{
    var size = selected.options[selected.selectedIndex].value;
    var pieces = document.getElementById("pieces").value;

    if(pieces == 0){
      return document.getElementById('result').innerHTML="Please select number of pieces"
    } else{
      return document.getElementById('result').innerHTML=`You chose ${pieces} pieces of size ${size}`;
    }


  }


}
