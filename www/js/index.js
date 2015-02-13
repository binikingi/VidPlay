var xmlhttp = new XMLHttpRequest();
function home(){
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
		    	document.getElementById("after").innerHTML=xmlhttp.responseText;
		 };
		xmlhttp.open("GET","http://codedesign.co.il/sites/forvidplay/get.php?page=index&search="+search,true);
		xmlhttp.send();
	}
}
