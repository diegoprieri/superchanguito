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
var c = document.getElementById("temp2");
var ctx = c.getContext("2d");

ctx.save();
ctx.translate(0,0);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(209.275,0);
ctx.lineTo(209.275,112.129);
ctx.lineTo(0,112.129);
ctx.closePath();
ctx.clip();
ctx.translate(0,0);
ctx.translate(0,0);
ctx.scale(0.5,0.5);
ctx.translate(0,0);
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.fillStyle = '#003FA3';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.save();
ctx.save();
ctx.beginPath();
ctx.moveTo(207.746,14.602);
ctx.bezierCurveTo(206.559,13.229000000000001,204.85600000000002,12.476,203.061,12.476);
ctx.lineTo(116.941,12.476);
ctx.lineTo(115.757,5.202000000000001);
ctx.bezierCurveTo(115.238,2.187,112.652,0,109.614,0);
ctx.lineTo(95.586,0);
ctx.bezierCurveTo(92.14699999999999,0,89.352,2.795,89.352,6.236);
ctx.bezierCurveTo(89.352,9.67,92.147,12.475,95.586,12.475);
ctx.lineTo(104.317,12.475);
ctx.lineTo(115.907,82.012);
ctx.bezierCurveTo(115.968,82.286,116.094,82.53,116.178,82.774);
ctx.bezierCurveTo(116.303,83.108,116.364,83.413,116.512,83.716);
ctx.bezierCurveTo(116.733,84.143,117.001,84.47699999999999,117.277,84.841);
ctx.bezierCurveTo(117.456,85.08399999999999,117.641,85.32799999999999,117.855,85.541);
ctx.bezierCurveTo(118.218,85.875,118.649,86.119,119.068,86.36099999999999);
ctx.bezierCurveTo(119.319,86.48199999999999,119.498,86.666,119.771,86.75699999999999);
ctx.bezierCurveTo(120.5,87.02999999999999,121.266,87.213,122.053,87.213);
ctx.lineTo(190.588,87.213);
ctx.bezierCurveTo(194.02599999999998,87.213,196.82399999999998,84.44399999999999,196.82399999999998,80.978);
ctx.bezierCurveTo(196.82399999999998,77.53999999999999,194.02499999999998,74.773,190.588,74.773);
ctx.lineTo(127.346,74.773);
ctx.lineTo(126.311,68.53699999999999);
ctx.lineTo(196.82600000000002,68.53699999999999);
ctx.bezierCurveTo(199.93000000000004,68.53699999999999,202.54500000000002,66.255,203.00100000000003,63.18299999999999);
ctx.lineTo(209.20700000000002,19.559999999999995);
ctx.bezierCurveTo(209.48,17.762,208.933,15.971,207.746,14.602);
ctx.lineTo(207.746,14.602);
ctx.closePath();
ctx.moveTo(195.852,24.91);
ctx.lineTo(194.08700000000002,37.387);
ctx.lineTo(171.91000000000003,37.387);
ctx.lineTo(171.91000000000003,24.91);
ctx.lineTo(195.852,24.91);
ctx.closePath();
ctx.moveTo(165.675,24.91);
ctx.lineTo(165.675,37.387);
ctx.lineTo(146.96300000000002,37.387);
ctx.lineTo(146.96300000000002,24.91);
ctx.lineTo(165.675,24.91);
ctx.closePath();
ctx.moveTo(165.675,43.626);
ctx.lineTo(165.675,56.064);
ctx.lineTo(146.96300000000002,56.064);
ctx.lineTo(146.96300000000002,43.626);
ctx.lineTo(165.675,43.626);
ctx.closePath();
ctx.moveTo(140.765,24.91);
ctx.lineTo(140.765,37.387);
ctx.lineTo(122.05299999999998,37.387);
ctx.bezierCurveTo(121.71299999999998,37.387,121.44399999999999,37.482,121.13999999999999,37.566);
ctx.lineTo(119.03599999999999,24.911);
ctx.lineTo(140.765,24.91);
ctx.lineTo(140.765,24.91);
ctx.closePath();
ctx.moveTo(122.144,43.626);
ctx.lineTo(140.76500000000001,43.626);
ctx.lineTo(140.76500000000001,56.064);
ctx.lineTo(124.21500000000002,56.064);
ctx.lineTo(122.144,43.626);
ctx.closePath();
ctx.moveTo(171.911,56.064);
ctx.lineTo(171.911,43.626);
ctx.lineTo(193.205,43.626);
ctx.lineTo(191.41000000000003,56.064);
ctx.lineTo(171.911,56.064);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.beginPath();
ctx.moveTo(140.765,102.79);
ctx.bezierCurveTo(140.765,107.962,136.559,112.129,131.38799999999998,112.129);
ctx.bezierCurveTo(126.24499999999998,112.129,122.05299999999997,107.962,122.05299999999997,102.79);
ctx.bezierCurveTo(122.05299999999997,97.64800000000001,126.24499999999998,93.45100000000001,131.38799999999998,93.45100000000001);
ctx.bezierCurveTo(136.559,93.451,140.765,97.648,140.765,102.79);
ctx.lineTo(140.765,102.79);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.beginPath();
ctx.moveTo(196.825,102.79);
ctx.bezierCurveTo(196.825,107.962,192.62699999999998,112.129,187.486,112.129);
ctx.bezierCurveTo(182.314,112.129,178.117,107.962,178.117,102.79);
ctx.bezierCurveTo(178.117,97.64800000000001,182.314,93.45100000000001,187.486,93.45100000000001);
ctx.bezierCurveTo(192.627,93.451,196.825,97.648,196.825,102.79);
ctx.lineTo(196.825,102.79);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.save();
ctx.beginPath();
ctx.moveTo(106.005,12.476);
ctx.bezierCurveTo(106.005,12.476,93.72999999999999,11.579,81.11099999999999,19.905);
ctx.bezierCurveTo(68.49199999999999,28.231,51.665,36.063,38.412,32.647);
ctx.bezierCurveTo(25.159,29.230999999999995,1.687,43.607,1.687,43.607);
ctx.bezierCurveTo(1.687,43.607,24.331,45.372,24.687,56.064);
ctx.bezierCurveTo(24.950000000000003,63.939,33.687,70.339,33.687,70.339);
ctx.bezierCurveTo(33.687,70.339,35.602,62.120999999999995,57.712999999999994,58.01);
ctx.bezierCurveTo(79.824,53.897999999999996,80.94399999999999,53.641999999999996,88.38399999999999,42.269999999999996);
ctx.bezierCurveTo(95.82399999999998,30.897999999999996,109.68599999999998,31.339,109.68599999999998,31.339);
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#000000";
ctx.miterLimit = 10;
ctx.beginPath();
ctx.moveTo(51.551,56.398);
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
