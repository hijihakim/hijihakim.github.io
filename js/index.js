//variable
const collection = document.querySelector('.collection');
const navbar = document.querySelector('nav');
const contactBox = document.querySelector('.contact-box');
var click = {contact:false};

//function 
function toggle(element, event){
	if (event == 'on'){
		element.classList.add('on-block');
		element.classList.remove('off');
	}else{
		element.classList.add('off');
		element.classList.remove('on-block');
	}
}


//
document.addEventListener('scroll', function(){
	if(document.documentElement.scrollTop > collection.offsetTop){
		toggle(navbar,'on');
	}
	if(document.documentElement.scrollTop < collection.offsetTop){
		toggle(navbar, 'remove');
	}
});


document.addEventListener('click', function(event){
	if(event.target.className == 'contact'){
		if(click.contact == false){
			toggle(contactBox, 'on');
			click.contact = true;
		}else{
			toggle(contactBox, 'remove')
			click.contact = false;
		}
	}

});

