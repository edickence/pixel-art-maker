var myColour;       
var height;
var  width;          

$("#sizePicker").submit(function(event){
  event.preventDefault();
  height=$("#inputHeight").val();
  width=$("#inputWidth").val();
  makeGrid(height,width);
});


function makeGrid(h,w) {
$("tr").remove();              
for(var i=1;i<=h;i++){
  $("#pixelCanvas").append("<tr id=newTable" + i + "></tr>");
  for(var j=1;j<=w;j++){
    $("#newTable" + i).append("<td></td>");      
  }
}

$("td").click(function addColour(){
  myColour=$("#colorPicker").val();
  if($(this).attr("style")){
    $(this).removeattr('style');
  }
  else{
    $(this).attr("style","background-color:"+ myColour);
  }
 }) 
}

                    

