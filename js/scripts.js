$('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
$(window).scroll(function(){
	scrollTop = $(window).scrollTop();
	if (scrollTop>0) {
		$('header').addClass("collapsed")
		return false;
	} else{
		$('header').removeClass("collapsed")
		return false;
	};


})
$(document).ready(function(){
	scrollTop = $(window).scrollTop();
	if (scrollTop>0) {
		$('header').addClass("collapsed")
		return false;
	} else{
		$('header').removeClass("collapsed")
		return false;
	};
	$('button.deduct').on('click', function(){
		var cant = $('input.number').val();
		if (cant>1) {
			if(cant==2){
				$(this).addClass('disabled');
			}
			cant--;
			$('input.number').val(cant)	
		}
		return false;
	})	
	$('button.add').on('click', function(){
		var cant = $('input.number').val();
		if (cant==1) {
			$('.deduct').removeClass('disabled');
		}
		cant++;
		$('input.number').val(cant)	
		return false;
	})
})