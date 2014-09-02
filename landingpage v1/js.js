function show(target){
    document.getElementById('signUpform').className += 'faded';
}
function hide(target){
	document.getElementById('signUpform').className = '';
}
function ambasadorshow(target){
	document.getElementById('companyfield').style.display = 'none';
	document.getElementById('namefield').style.display = 'block';
	document.getElementById('messagefield').style.display = 'none';
	document.getElementById('emailfield').style.display = 'block';
	document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('explanation').innerHTML = 'Stay tuned for the release';

}
function venueshow(target){
	document.getElementById('messagefield').style.display = 'block';
	document.getElementById('companyfield').style.display = 'block';
	document.getElementById('namefield').style.display = 'block';
	document.getElementById('emailfield').style.display = 'block';
	document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('explanation').innerHTML = 'Want to get offers';
}
function clientshow(target){
	document.getElementById('messagefield').style.display = 'block';
	document.getElementById('companyfield').style.display = 'block';
	document.getElementById('namefield').style.display = 'block';
	document.getElementById('emailfield').style.display = 'block';
	document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('explanation').innerHTML = 'Work with us';
}
function othershow(target){
	document.getElementById('messagefield').style.display = 'block';
	document.getElementById('companyfield').style.display = 'block';
	document.getElementById('namefield').style.display = 'block';
	document.getElementById('emailfield').style.display = 'block';
	document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('explanation').innerHTML = 'Stay tuned for the release';
}