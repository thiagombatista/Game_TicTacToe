function getParam(index) {

    // console.table(getParams(window.location.href));
    let paramsArray = [];
    paramsArray = getParams(window.location.href);
    
    return(paramsArray[index]);
}

var getParams = function (url) {
 /**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * source 2: https://gomakethings.com/getting-all-query-string-values-from-a-url-with-vanilla-js/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */

	var params = [];
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};


// ----------------------


function insert_images(quantity, source, parent_imageId){

	// example: insert_images(chosen_numballoons, '../assets/images/balao_azul_pequeno.png', 'parent_imageId');
	
	for(var i = 1; i <= quantity; i++){

		var image = document.createElement("img");
		image.src = source;
		image.style.margin = '10px';
		image.id = 'b'+i;
		// image.onclick = function(){ pop(this); };

		document.getElementById(parent_imageId).appendChild(image);
	}
}

function remove_images(quantity, parent_imageId){

	// example: remove_images(chosen_numballoons, 'parent_imageId');

    var child = document.getElementById(parent_imageId).lastElementChild;
    while (child) { 
        document.getElementById(parent_imageId).removeChild(child); 
        child = document.getElementById(parent_imageId).lastElementChild; 
    } 
}