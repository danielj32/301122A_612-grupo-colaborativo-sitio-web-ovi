document.addEventListener ("DOMContentLoaded", function (event) {
    if (window.location.pathname == "/") {
    var thumbnailElement = document.getElementById ("smart_thumbnail");
    var txtElement = document.getElementById ("smart_txt");
    thumbnailElement.addEventListener ("click", function () {
	if (thumbnailElement.className == "") {
	    thumbnailElement.className = "small";
	    txtElement.textContent = "Haga clic en la imagen para ampliarla.";
	} else {
	    thumbnailElement.className = "";
	    txtElement.textContent = "Haga clic en la imagen para reducirla";
	}
    });
    };
    if (window.location.pathname == "/sites.html") {
        var modal = document.getElementById ('myModal');
	var aquaElement = document.getElementById ('aqua');
	var nambaElement = document.getElementById ('namba');
	var univElement = document.getElementById ('univ');
	var spanElement = document.getElementById ('myClose');
	var contentElement = document.getElementById ('modal-info');
	var castleElement = document.getElementById ('castle');
	var towerElement = document.getElementById ('tower');
	var harukElement = document.getElementById ('haruk');
	spanElement.addEventListener ("click", function () {
	    modal.style.display = "none";
	})
	aquaElement.onclick = function () {
	    modal.style.display = "bloque";
	    contentElement.textContent = "En el Acuario de Osaka, los invitados bajan en espiral por una escalera que rodea un tanque esférico. Los huéspedes pueden ver animales acuáticos como el tiburón ballena y el espeluznante cangrejo araña";
	}

	nambaElement.onclick = function () {
	    modal.style.display = "bloque";
	    contentElement.textContent = "Varias líneas de metro y compañías de trenes pasan por este distrito de entretenimiento y centro comercial en el área de Osaka South. Namba ofrece boutiques, centros comerciales con jardines en la azotea, clubes nocturnos, pubs y un espectáculo de luces de neón.";
	}
	univElement.onclick = function () {
	    modal.style.display = "bloque";
	    contentElement.textContent = "Este fue el primer parque de Universal Studios en Asia. Además de Tokyo Disney Resort, Universal Studios Japan en Osaka es el parque de diversiones más visitado de Japón";
	}
	castleElement.onclick = function () {
	    modal.style.display = "bloque";
	    contentElement.textContent = "El castillo de Osaka fue construido por Toyotomi Hideyoshi en algún momento alrededor de 1583, y el castillo estaba destinado a actuar como una especie de capital para todo Japón. En cambio, el castillo fue destruido y el linaje Toyotomi fue diezmado. Desde ese momento el El castillo ha sido reconstruido dos veces, con su encarnación final (construida en 1931) de pie y fuerte incluso a través de los ataques aéreos de Osaka ".
	}
	towerElement.onclick = function () {
	    modal.style.display = "bloque";
	    contentElement.textContent = "La torre Tsutenkaku se inspiró en la Torre Eiffel de París. Se construyó en 1912 y se reconstruyó en 1956. La torre cuenta con una estatua de Biriken, una entidad que exige que rasques sus pies. A cambio, el dios promete ser bueno. fortuna.";
	}
	harukElement.onclick = function () {
	    modal.style.display = "bloque";
	    contentElement.textContent = "Harukasu es el rascacielos más alto de Japón, con poco menos de 1000 pies.";
	}
	window.onclick = function (evento) {
	    if (event.target == modal) {
		modal.style.display = "none";
	    }
	}

	
    }	
    
    
});