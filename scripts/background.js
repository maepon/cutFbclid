// background

const facebookRegexp = /^https:\/\/www\.facebook\.com\//
const facebookRedirectionRegexp = /^https:\/\/l\.facebook\.com\/l\.php\?/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && facebookRegexp.test(tab.url)) {
        chrome.tabs.executeScript(tab.id, { file: "scripts/replaceURL.js" });
    }

    if (changeInfo.status === 'loading' && tab.url && facebookRedirectionRegexp.test(tab.url)){
        const searchParams = new URLSearchParams((tab.url.split('?'))[1])
        if (searchParams.has('u')){
            const active = tab.active
            chrome.tabs.remove(tab.id)
            let redirectUrl = searchParams.get('u')
            const fbclidRegexp = /(%26|%3F|&|\?)fbclid(%3D|=)[\w-]+/
            const matchRes = redirectUrl.match(fbclidRegexp)
            if (matchRes){
                redirectUrl = redirectUrl.replace(matchRes[0],'')
            }
            chrome.tabs.create({ url: redirectUrl , index: tab.index, active: active})
        }
    }
});