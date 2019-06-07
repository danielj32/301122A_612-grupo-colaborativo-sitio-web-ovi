document.addEventListener("DOMContentLoaded", function(event) {
	var thumbnailElement = document.getElementById("smart_thumbnail");
	var txtElement = document.getElementById ("smart_txt");
    thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == "small") {
	    thumbnailElement.className = "";
		thumbnailElement.className = "Festival";
		txtElement.textContent = "Click to reduce.";

	}else {
		thumbnailElement.className = "small";
		txtElement.textContent = "click to zoom";

	}
    }); 
});

