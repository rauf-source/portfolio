
$(document).ready(function(){
//search form , preventing it from refreshing on submission
$("#searchform").submit(function(e) {
    e.preventDefault();
});
//defining all the functions I need
//search labs function
let searchLabs = () =>{
$("#searchButton").click(
()=>{
  $("#box").empty();
  //make dir for searchbox

$("#box").append(searchbox);
 $("#results").append("<h1>  '" + $("#search").val() + "'</h1>");
 let counter = 0;
  for(let i = 0; i < algos.length; i++){
  	//define regex for input text
  	//also convert it to lowrcase
  	let regex =  new RegExp($("#search").val().toLowerCase());
	if(regex.test(algos[i].meta))
	{
	$("#searchbox").append( "<span class='fa fa-terminal fa-2x'></span><a href=' "+ algos[i].link + " ' target='_blank' class='btn btn-default btn-md '><strong>Lab "+algos[i].id + "</strong></a><p>"+algos[i].meta + "</p><br>");	
	counter++;
	}

};
if(counter<=0){$("#results").append("<h2>Not Found!</h2><br><h2>Search feature only works with key words , try \"" + hitsAlgos[Math.floor(Math.random() * hitsAlgos.length)] + "\" "); }
});
}





//here all the action happens
searchLabs();	
//running search labs function

});
	





