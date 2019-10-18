
$(document).ready(function(){
	for(let i = 0; i < labs.length;i++){
	$("#ooplabs").append( "<span class='fa fa-terminal fa-2x'></span><a href=' "+ labs[i].link + " ' target='_blank' class='btn btn-default btn-md '><strong>Lab "+labs[i].id + "</strong></a><p>"+labs[i].message + "</p><br>");
	}
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

$("#box").append(intro);
 $("#results").append("<h1>  '" + $("#search").val() + "'</h1>");
 let counter = 0;
  for(let i = 0; i < algos.length; i++){
  	//define regex for input text
  	//also convert it to lowrcase
  	let regex =  new RegExp($("#search").val().toLowerCase());
	if(regex.test(algos[i].meta))
	{
	counter++;
	if(counter === 1){$("#box").append(searchbox);}
	$("#searchbox").append( "<span class='fa fa-terminal fa-2x'></span><a href=' "+ algos[i].link + " ' target='_blank' class='btn btn-default btn-md '><strong>Algorithm "+algos[i].id + "</strong></a><p>"+algos[i].message + "</p>");	
	
	}

};
$("#box").append("<br><br><br><br>");

if(counter<=0){$("#results").append("<h2>Not Found!</h2><br><h2>Search feature only works with key words , try \"" + hitsAlgos[Math.floor(Math.random() * hitsAlgos.length)] + "\" "); }
});


}





//here all the action happens
searchLabs();	

//running search labs function

});
	





