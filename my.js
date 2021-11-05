function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbxsXHS4OWlpjF-LO1DdX0A0FFelEhrXzLy_ichV8AG7-q2ZzNKxuZz2ftj8A2BFHPq2/exec"
 

    fetch(url)
        .then(d => d.json())
        .then(d => {

            document.getElementById("app").textContent = d[0].status;

        });

}

document.getElementById("btn").addEventListener("click",testGS)

function addGS() {

    const url = "https://script.google.com/macros/s/AKfycbxsXHS4OWlpjF-LO1DdX0A0FFelEhrXzLy_ichV8AG7-q2ZzNKxuZz2ftj8A2BFHPq2/exec"
 

    fetch(url,{})

fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"John"}) // body data type must match "Content-Type" header
      });
      //return response.json(); // parses JSON response into native JavaScript objects
    }

document.getElementById("btn2").addEventListener("click",addGS)
