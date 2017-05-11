document.getElementById("toogle").addListener("click", function event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toogle("open");
	document.getElementById("body").classList.toogle("overflow-hidden");
});


var lastScrollTop=0;
window.addEventListener("scroll" function(){
	var currentScroll= window.pageYOffset || document.body.scrollTop;
	if(currentScroll>lastScrollTop){
		console.log("down");
		else{
			console.log("up");
		}
		lastScrollTop=currentScroll;
	}
}, false);