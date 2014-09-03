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
	document.getElementById('explanation').innerHTML = 'Join our waiting list! </br>  We will let you know when we will launch in your area.';

}
function venueshow(target){
	document.getElementById('messagefield').style.display = 'block';
	document.getElementById('companyfield').style.display = 'block';
	document.getElementById('namefield').style.display = 'block';
	document.getElementById('emailfield').style.display = 'block';
	document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('explanation').innerHTML = 'Stay tuned for online opportunities and special offers';
}
function clientshow(target){
	document.getElementById('messagefield').style.display = 'block';
	document.getElementById('companyfield').style.display = 'block';
	document.getElementById('namefield').style.display = 'block';
	document.getElementById('emailfield').style.display = 'block';
	document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('explanation').innerHTML = 'We are happy to explain how our solution will accelerate your growth';
}
function othershow(target){
	document.getElementById('messagefield').style.display = 'block';
	document.getElementById('companyfield').style.display = 'block';
	document.getElementById('namefield').style.display = 'block';
	document.getElementById('emailfield').style.display = 'block';
	document.getElementById('submit').style.display = 'inline-block';
	document.getElementById('explanation').innerHTML = 'Contact us for general enquires, including partnership and career opportunities.';
}