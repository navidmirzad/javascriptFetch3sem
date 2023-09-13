console.log("Im in fetchURL")

/*function fetchAnyUrlText(url) {
    console.log("Inside fetch text url = " + url)
    return fetch(url).then(response  => response.text());
}*/

function fetchAnyUrl(url) {
    console.log("Inside fetch url = " + url)
    return fetch(url).then(response => response.json());
}

function getKeysAndValuesFromObj(obj) {
    const keys = Object.keys(obj)
    return keys.map(key => `${key} : ${obj[key]}`)
}


async function actionFetchUrl(btn) {
    const url = inpUrl.value
    console.log(url)
    let jsonOutput = await fetchAnyUrl(url)
    if (Array.isArray(jsonOutput)) {
        jsonOutput = jsonOutput[0]
    }
    jsonOutput = getKeysAndValuesFromObj(jsonOutput)
    textArea.textContent = jsonOutput
    console.log(jsonOutput)
}

const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetchUrl = document.getElementById("pbFetchUrl")
pbFetchUrl.addEventListener("click", actionFetchUrl)


