const overTopCollection = document.querySelector(".collection").offsetTop;

$(window).on('scroll', function(){
	if(document.documentElement.scrollTop > overTopCollection){
		$('.off').show(1000);
	}else{
		$('.off').hide(1000);
	}
});

///// contact show ////// 

$('.contact').click(function(){
	$('.contact-box').toggle();
});




/// json //////
var data;

function edit(d){
	let parseData = '';
	console.log(d);
	for(let i = 0; i < d.length; i++){
		parseData += '<div class="card"><a href="'+ d[i].url +'"><div class="card-head"><span class="circle"></span><span class="title">'+ d[i].title +'</span></div><img src="img/'+ d[i].image +'" alt="'+ d[i].title +'"></a><div class="body"><p>'+ d[i].info +'</p><section class="time"><span class="circle"></span><span>'+ d[i].time +'</span></section></div></div>';
	}

	$('.collection').html(parseData);
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		data = JSON.parse(this.responseText);
		edit(data);
	}
}

xhr.open('GET','http://hijihakim.github.io/json/data.json',true);
xhr.send();



