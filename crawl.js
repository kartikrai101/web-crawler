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
    normalizeURL
}