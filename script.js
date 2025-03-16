var rect = document.getElementById("rect");

rect.addEventListener("mousemove", function (details) {
    var rectlocation = rect.getBoundingClientRect();
    var distance = details.clientX - rectlocation.left;

    if (distance < rectlocation.width / 2) {
        var red=gsap.utils.mapRange(0,255,0,rectlocation.width/2,distance)
        gsap.to(rect, {
            backgroundColor: `rgb(${red},0,0)`,
            ease: "power1.inOut"
        });
    }  
    else {
        var blue=gsap.utils.mapRange(rectlocation.width/2,rectlocation.width,255,0,distance)
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blue})`,
            ease: "power1.inOut"
        });
   }
  
});
rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
        ease: "power1.inOut"
    });
});