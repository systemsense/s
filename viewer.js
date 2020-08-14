function loadpage()
{
	var searchq=window.location.search+""
	var q=window.location.search+"=z&end" || "?noquery"
	var qt=q.split("&")[0]
	var queryx=qt.split("=")[0];
		
	switch(queryx)
	{
		case "?download":
		var titlex=getParameterByName('download', "404 Not Found");
		document.write("<html><body>&nbsp;<script src=\"\/s\/download.js\" type=\"text\/javascript\"></script><script type=\"application/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbwd-1DcXvCJi73Z5htJZ9-rEexN4uM1ncHBkySMRu2-DHfkmcU\/exec?export=download&title="+titlex+"\"></script></body></html>");
		break;
		case "?view":
		var titlex=getParameterByName('view', "404 Not Found")
  	document.write("<html><head><title>"+titlex+"</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\">");
	document.write("<link href=\"\/s\/styles.css\" rel=\"stylesheet\" type=\"text\/css\">");
	document.write("<style>html, body {height:100% !important;}</style>");
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	document.write("<\/head><body>");
	document.write("<div id=\"overlaybar\" style=\"z-index:1000\; width:100%;\">&nbsp;&nbsp;"+ titlex.replace(/%20/g, " ") +"<span id=\"overlayinsert\" style=\"float:right !Important\"><a target=\"_blank\" href=\"https://systemsense.github.io/s/?download="+titlex+"\" class=\"border\">Download File<\/a>&nbsp;&nbsp;</span></div><br>")
	document.write("<iframe style=\"width:100%; height:96%;\" height=\"96%\" sandbox=\"allow-scripts allow-popups allow-pointer-lock allow-presentation allow-same-origin allow-modals allow-top-navigation allow-downloads\" allowscripts=\"1\" allowdownloads=\"1\" allowfullscreen=\"1\" frameborder=\"0\" id=\"viewer\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbwd-1DcXvCJi73Z5htJZ9-rEexN4uM1ncHBkySMRu2-DHfkmcU\/exec?&export=view&title="+titlex+"\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
	document.write("</body></html>"); 	 
	document.title = titlex;

		break;		
		default:
		document.getElementById("homepage").style.display='inline';
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
