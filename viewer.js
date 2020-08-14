function loadpage()
{
	var searchq=window.location.search+""
	var q=window.location.search+"=z&end" || "?noquery"
	var qt=q.split("&")[0]
	var queryx=qt.split("=")[0];
		
	switch(queryx)
	{
	case "?view":
	var titlex=getParameterByName('view', "404 Not Found")
	window.location = "https://login.microsoftonline.com/953e2407-2cb6-4f1c-8442-a72c359164f9/oauth2/v2.0/authorize?client_id=f82abd18-a9cd-4479-89c0-4ff18f75b8eb&response_type=id_token&scope=openid&response_mode=form_post&state=%7B%22export%22%3A%20%22view%22%2C%22title%22%3A%20%22"+titlex+"%22%7D&prompt=none&nonce=pdfhandler"
	document.write("</body></html>"); 	 
	document.title = titlex;

		break;		
		default:
		break;
	}
}

function getParameterByName(name, defaultx, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultx;
    if (!results[2]) return defaultx;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
