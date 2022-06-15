$(document).ready( function(){
	$('#time').bind('click', function(){
		if(document.documentElement.hasAttribute("theme")){
			document.documentElement.removeAttribute("theme");
		}
		else{
			document.documentElement.setAttribute("theme", "dark");
		};
	});
});