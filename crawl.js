const {JSDOM} = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL){
    const urls = [];
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for(linkElement of linkElements){
        if(linkElement.href.slice(0, 1) === '/'){
            // relative
            try{
                const urlObj = new URL(`${baseURL}${linkElement.href}`)
                urls.push(urlObj.href)
            }catch(err){
                console.log("error with relative URL:", err.message);
            }
        }else{
            //absolute
            try{
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href);
            }catch(err){
                console.log("error with absolute URL:", err.message);
            }
        }
    }
    return urls;
}

// the job of normalizeURL function is to take in the input urls and then return 
// same output for the URLs that lead to the same page
// example: 'http://www.boot.dev', 'http://www.BooT.dev', 'https://www.boot.dev' -> Although these three might look different
// All these URLs obviously lead to the same page. So, we want the normalizeURL function to return same output URL 
// for all these URLs, like 'boot.dev'
function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if(hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0, -1);
    }
    return hostPath;
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}