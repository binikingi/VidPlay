var xmlhttp = new XMLHttpRequest();
function home(){
	document.getElementById("after").style.display = 'none';
	document.getElementById("after").innerHTML="";
	xmlhttp.onreadystatechange = function(){
		document.getElementById("wrap").innerHTML="LOADING...<img src='ajax-loader.gif'/>";
	  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    	document.getElementById("wrap").innerHTML=xmlhttp.responseText;
	 };
	xmlhttp.open("GET","http://codedesign.co.il/sites/forvidplay/get.php?page=index",true);
	xmlhttp.send();
}
function showHome(){
	document.getElementById("after").style.display = 'none';
	document.getElementById("after").innerHTML="";
	document.getElementById("wrap").style.display = 'block';
}
function show($id){
	document.getElementById("after").style.display = 'block';
	document.getElementById("wrap").style.display = 'none';
	xmlhttp.onreadystatechange = function(){
		document.getElementById("after").innerHTML="LOADING...<img src='ajax-loader.gif'/>";
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
	   		document.getElementById("after").innerHTML=xmlhttp.responseText;
	 };
	xmlhttp.open("GET","http://codedesign.co.il/sites/forvidplay/get.php?page=video&id="+$id,true);
	xmlhttp.send();
}

function search(e){
	var unicode=e.keyCode? e.keyCode : e.charCode;
	if(unicode == 13){
		var search = document.getElementById('search').value;
		document.getElementById("after").style.display = 'block';
		document.getElementById("wrap").style.display = 'none';
		xmlhttp.onreadystatechange = function(){
			document.getElementById("after").innerHTML="LOADING...<img src='ajax-loader.gif'/>";
		  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		    	document.getElementById("after").innerHTML=decodeURIComponent(xmlhttp.responseText);
		 };
		xmlhttp.open("GET","http://codedesign.co.il/sites/forvidplay/get.php?page=index&search="+encodeURIComponent(search),true);
		xmlhttp.send();
	}
}

function sendContact(){
	var movieName = document.getElementById("movieName").value;
	var imdb = document.getElementById("imdb").value;
	
	if(movieName.trim() == '')
		document.getElementById("massage").innerHTML = 'You have to fill the movie name';
	else{
		document.getElementById("movieName").value = '';
		document.getElementById("imdb").value='';
		xmlhttp.onreadystatechange = function(){
			document.getElementById("massage").innerHTML="LOADING...<img src='ajax-loader.gif'/>";
		  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		    	document.getElementById("massage").innerHTML=xmlhttp.responseText;
		 };
		xmlhttp.open("GET","http://codedesign.co.il/sites/forvidplay/get.php?page=contact&imdb="+imdb+"&movieName="+movieName,true);
		xmlhttp.send();
	}
}
