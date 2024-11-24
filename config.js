async function generate() {
	x=Math.floor(Math.random() * (1025-1+1))+1 ;//Math.floor(Math.random() * (max - min + 1)) + min
	requestString="https://pokeapi.co/api/v2/pokemon/"+x;//intialiser the request
	data=await fetch(requestString);//donner the request au BD de l API
	console.log(data);
	response=await data.json();//recupere les donner
	console.log(response);
	name=response.species.name;//get the name
	string="#"+x+" "+name;
	document.getElementById("string").innerHTML=string;
	image=response.sprites.front_default;//get the image
	document.getElementById("im").src=image;
}