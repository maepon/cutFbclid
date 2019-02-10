// replaceURL

const fbclidRegexp = /(%26|%3F)fbclid%3D[\w-]+/

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
    const matchRes = element.getAttribute('href').match(fbclidRegexp)
    const replacedHref = element.getAttribute('href').replace(matchRes[0],'')

    element.setAttribute('href',replacedHref)
}

main();
