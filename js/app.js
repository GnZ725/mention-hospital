$(document).ready(function(){
	console.log('I am working');
});

// start header section

// start banner section

// end banner section

// end header section


// start info section


$(window).scroll(function(){
	let getscrollpoint = $(this).scrollTop();
	// console.log(getscrollpoint);
	if(getscrollpoint >= 412){
		$("infotexts").addClass("fromlefts");
		$("infopics").addClass("fromlefts");
	}else{
		$("infotexts").removeClass("fromrights");
		$("infopics").removeClass("fromrights");
	}
})
// end info section

// start adv section

$("#videos").click(function(){

	var getmodal = $(this).data("bs-target");
	var getvideossrc = $(this).data("video");
	var videourlwithauto = getvideossrc+"?autoplay=1";

	$(getmodal + " iframe").attr("src",videourlwithauto);

	$(getmodal + "button.btn-close").click(function(){
		$(getmodal+ " iframe").attr("src",getvideosrc);
	});
	$(getmodal).click('hidden.bs.modal',function(){
		$(getmodal+ " iframe").attr("src",getvideosrc);
	});
})

// end adv section

// start premises section 
$("#lightslider").lightSlider({
	// auto:true,
	item:4,
	loop:true,
	slideMove:1,
	speed:600,
}).play();


// end premises section


// start pricing section

$(window).scroll(function(){
	let getscroll= $(this).scrollTop();
	// console.log(getscroll);
	if(getscroll >= 2450){
		$("cardones").addClass("movelefts");
		$("cardtwos").addClass("movebottoms");
		$("cardthrees").addClass("moverights");
	}else{
		$("cardones").removeClass("movelefts");
		$("cardtwos").removeClass("movebottoms");
		$("cardthrees").removeClass("moverights");
	}

});


// end pricing section

// start join us section

$("#accordion").accordion();
// end join us section


// start footer section
$("#getyear").text(new Date().getUTCFullYear());

// end footer sectio


// start progress 

$(window).scroll(function(){
	var getprogress = $("#progresses");
	var getprogressval = $("#progressvalues");
	var getscrolltop = $(this).scrollTop();
	// console.log(getscrolltop);

	var getscrollheight = $(document).height();
	// console.log(getscrollheight);
	var getclientheight = $(window).height();
	// console.log(getclientheight);
	var calcheight = getscrollheight - getclientheight;
	var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
	// console.log(getfinalheight);


	getprogressval.text(`${getfinalheight}%`);



	getprogress.css({
		"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
	})

	// st * 100 / (pjheight - cvheight)

})

// end progress 