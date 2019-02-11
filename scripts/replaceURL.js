// replaceURL

const fbclidRegexp = /(%26|%3F)fbclid%3D[\w-]+/
const fbclidRegexp2 = /(\&|\?)fbclid=[\w-]+/

const main = () => {
    const aTags = pickupShareURLs()
    aTags.forEach(element => replaceURL(element))
    setTimeout(main,500)
}

const pickupShareURLs = () => {
    const aTags = document.querySelectorAll('a[href*="fbclid%3D"]')
    return aTags
}

const replaceURL = element => {
    let replacedHref = element.getAttribute('href')
    const matchRes = element.getAttribute('href').match(fbclidRegexp)
    if (matchRes){
        replacedHref = replacedHref.replace(matchRes[0],'')
    }

    const matchRes2 = element.getAttribute('href').match(fbclidRegexp2)
    if (matchRes2){
        replacedHref = replacedHref.replace(matchRes2[0],'')
    }

    element.setAttribute('href',replacedHref)
}

main();
