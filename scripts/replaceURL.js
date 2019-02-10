// replaceURL

let aTagLength = 0
const fbclidRegexp = /(%26|%3F)fbclid%3D[\w-]+/

const main = () => {
    const aTags = pickupShareURLs()

    if (aTags.length !== aTagLength){
        aTagLength = aTags.length
        aTags.forEach(element => replaceURL(element))
    }
}

const pickupShareURLs = () => {
    const aTags = document.querySelectorAll('a[href*="fbclid%3D"]')
    return aTags

}

const replaceURL = element => {
    const matchRes = element.getAttribute('href').match(fbclidRegexp)
    const replacedHref = element.getAttribute('href').replace(matchRes[0],'')

    element.setAttribute('href',replacedHref)
}

main();

setInterval(main,500)