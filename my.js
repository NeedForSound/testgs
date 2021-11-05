function testGS() {

    const url = "https://script.googleusercontent.com/a/macros/xpertcure.com/echo?user_content_key=UCBu6TNTs5walq-VBMd7R5NdxUQ1eKFiaoW5F0EV2BXpbL0-O923C7YBTRnTiDXbFNfsikplnCq0OiSv4W8LBE-yaDtxu7AzOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKCXsRKgaA4rt0KJWFAZw31qS4chwneYR2vGhFOLiRFWzwDpO-C3WnZe7syhl49-b3LrJsEctYS9yahoNrxwXpShJEeTdksGvvxyzyXNnmZBR_GICXuQ_C4s61gI8n3Z1I4&lib=Mf0AY8A-YV--oqobBEDqq--dzRm4IKlxF"


    fetch(url)
        .then(d => d.json())
        .then(d => {

            document.getElementById("app").textContent = d[0].status;

        });

}

document.getElementById("btn").addEventListener("click",testGS)