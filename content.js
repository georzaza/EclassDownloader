chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message == "getLinks") {
		var links = [];
		$(".visible input").each(function(i, el) {
			links.push({ "url": el.nextSibling.href, "description": el.nextSibling.text });
		});
		
		let doc;
		let i;
		for (i=0; i<links.length; i++)  {
			if ( (links[i].url.indexOf(":")) != 4 )    {
				let xmlHTTP;
				if ((links[i].url.substr(links[i].url.lastIndexOf('.'))).length > 5)    {
					xmlHTTP = new XMLHttpRequest();                     
					xmlHTTP.open('GET', links[i].url, false);
					xmlHTTP.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200)    {
							doc = document.implementation.createHTMLDocument("doc");
                            doc.write(this.responseText);
						}
					}
					xmlHTTP.send();

                    let temp = doc.querySelectorAll(".visible input");
					for (let j=0; j<temp.length; j++)    {
						links.push( { "url": temp[j].nextSibling.href, "description": temp[j].nextSibling.text });
                    }
				}
			}
		}
		let t=0;
		let final_links = [];
		for (i=0; i<links.length; i++)  {
			if (    ((links[i].url.substr(links[i].url.lastIndexOf('.') + 1)).length < 6)    &&
					((links[i].url.indexOf(":")) != 4 ) )	{

				final_links[t] = links[i];
				t++;
			}
		}
		chrome.runtime.sendMessage({ "message": "links", "links": final_links });
	}
});
