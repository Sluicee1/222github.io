var doc_w = $(document).width()

function totab() {
	$("#about").addClass('active');
	$("#menu").removeClass('active');
	$("#contaks").removeClass('active');
	$("header").animate({
		marginTop: "0px",
		paddingBottom: "10px"},
		250);
	$(".citata").hide("250");
}
function totmen() {
	$("#about").removeClass('active');
	$("#menu").addClass('active');
	$("#contaks").removeClass('active');
	$("header").animate({
		marginTop: "0px",
		paddingBottom: "10px"},
		250);
	$(".citata").hide("250");
}
function totcon() {
	$("#about").removeClass('active');
	$("#menu").removeClass('active');
	$("#contaks").addClass('active');
	$("header").animate({
		marginTop: "0px",
		paddingBottom: "10px"},
		250);
	$(".citata").hide("250");
}
function mainstage() {
	$("#about").removeClass('active');
	$("#menu").removeClass('active');
	$("#contaks").removeClass('active');
	if ($(document).width() <= 1400) {
		$("header").animate({
		marginTop: "25px",
		paddingBottom: "10px"},
		10);
	}
	else {
		$("header").animate({
		marginTop: "25px",
		paddingBottom: "55px"},
		10);
	}	
	$(".citata").show("250");
	$(".toup").fadeOut();
}

if (doc_w <= 1400) {
	$(".citata").remove()
}
if (doc_w <= 1080) {
	$(".toup").remove()
}

$(document).on("scroll", function () {
	var doc_w = $(document).width()
	var scrol = $(document).scrollTop()
	if (scrol >= 200) {
		$("header").animate({
			marginTop: "0px",
			paddingBottom: "10px"},
			10);
		$(".citata").hide("250");
		$(".toup").fadeIn();
	}
	if (scrol <= 100) {
		if ($(document).width() <= 1400) {
			$("header").animate({
			marginTop: "25px",
			paddingBottom: "10px"},
			10);
		}
		else {
			$("header").animate({
			marginTop: "25px",
			paddingBottom: "55px"},
			10);
		}	
		if ($(document).width() <= 1400) {
			//
		}
		else {
			$(".citata").show("250");
		}
		$(".toup").fadeOut();
	}
	if (doc_w <= 1080) {
		if (scrol >= 200 && scrol < 1700) {
			$("#about").addClass('active');
			$("#menu").removeClass('active');
			$("#contaks").removeClass('active');
		}
	}
	else {
		if (scrol >= 200 && scrol < 900) {
			$("#about").addClass('active');
			$("#menu").removeClass('active');
			$("#contaks").removeClass('active');
		}

	}
	if (scrol < 100) {
		$("#about").removeClass('active');
		$("#menu").removeClass('active');
		$("#contaks").removeClass('active');
	}
	if (doc_w <= 1080) {
		if (scrol >= 1700 && scrol < 2800) {
			$("#about").removeClass('active');
			$("#menu").addClass('active');
			$("#contaks").removeClass('active');
		}
	}
	else {
		if (scrol >= 900 && scrol < 1409) {
			$("#about").removeClass('active');
			$("#menu").addClass('active');
			$("#contaks").removeClass('active');
		}
	}
	if (doc_w <= 1080) {
		if (scrol >= 2800) {
			$("#about").removeClass('active');
			$("#menu").removeClass('active');
			$("#contaks").addClass('active');
		}
	}
	else {
		if (scrol >= 1409) {
			$("#about").removeClass('active');
			$("#menu").removeClass('active');
			$("#contaks").addClass('active');
		}
	}
})

function quest(){
	$(".form").show(200)
	var scrol = $(document).scrollTop()
    var docHeight = $(document).height();
    $("body").append("<div class='overlay'></div>");
    $(".overlay")
        .height(docHeight)
        .css({
            'opacity' : 0.4,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'background-color': 'black',
            'width': '100%',
            'z-index': 5000
        });	
    $("body,html").css({overflow : "hidden"})
    $("body,html").scrollTop(scrol)
    $(".toup").fadeOut();
    $(".overlay").on("click", function () {
		$(".overlay").remove()
		$(".form").hide(200)
		$(".toup").fadeIn();
		$("body,html").css({overflow : "visible"})
		$("body,html").scrollTop(scrol)
	})
};

$("#name").on("focus", function () {
	$("#line1").css({
		borderColor: '#00733e'});
})

$("#name").on("blur", function () {
	$("#line1").css({
		border: '1px solid white'
	});
})

$("#tel").on("focus", function () {
	$("#line2").css({
		borderColor: '#00733e'});
})

$("#tel").on("blur", function () {
	$("#line2").css({
		border: '1px solid white'
	});
})

$("#email").on("focus", function () {
	$("#line3").css({
		borderColor: '#00733e'});
})

$("#email").on("blur", function () {
	$("#line3").css({
		border: '1px solid white'
	});
})

$("#area").on("focus", function () {
	$("#line5").css({
		borderColor: '#00733e'});
})

$("#area").on("blur", function () {
	$("#line5").css({
		border: '1px solid white'
	});
})

function toup() {
	$('html, body').animate({scrollTop : "0"}, 800)
}
