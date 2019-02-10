// background

const facebookRegexp = /^https\:\/\/www\.facebook\.com\//

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && facebookRegexp.test(tab.url)) {
        chrome.tabs.executeScript(tab.id, { file: "scripts/replaceURL.js" });
    }
});