console.log("Im in fetchURL")


const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetchUrl = document.getElementById("pbFetchUrl")
pbFetchUrl.addEventListener("click", actionFetchUrl)

async function actionFetchUrl(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = await fetchAnyUrl(url)
    textArea.textContent = jsonOutput
    console.log(jsonOutput)

    function fetchAnyUrl(url) {
        console.log("Inside fetch url = " + url)
        return fetch(url).then(response  => response.json());
    }

    function fetchAnyUrlText(url) {
        console.log("Inside fetch text url = " + url)
        return fetch(url).then(response  => response.text());
    }

}


