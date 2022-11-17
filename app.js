const token = document.getElementsByTagName('input')[name="CSRF-TOKEN-CL-FORM"];

// Obtiene info de lineas
fetch('https://cuandollega.smartmovepro.net/transpuntano/lineas', {
    method: 'POST',
    headers: {
        "RequestVerificationToken": token.value,
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e)
})

fetch('https://cuandollega.smartmovepro.net/transpuntano/calles/?codLinea=343&programados=false', {
    method: 'POST',
    headers: {
        "RequestVerificationToken": token.value,
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e)
})

fetch('https://cuandollega.smartmovepro.net/transpuntano/intersecciones/?codLinea=343&codCalle=19903&programados=false', {
    body: { codCalle: 19903, codLinea: 343 },
    method: 'POST',
    headers: {
        "RequestVerificationToken": token.value,
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e)
})

fetch('https://cuandollega.smartmovepro.net/transpuntano/paradas/?codLinea=343&codCalle=19903&codInterseccion=34076&programados=false', {
    body: { codCalle: 19903, codLinea: 343, codInterseccion: 34076 },
    method: 'POST',
    headers: {
        "RequestVerificationToken": token.value,
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e)
})

fetch('https://cuandollega.smartmovepro.net/transpuntano/arribos/?codLinea=343&idParada=SL50557', {
    body: { codLinea: 343, idParada: 'SL50557' },
    method: 'POST',
    headers: {
        "RequestVerificationToken": token.value,
        'Content-Type': 'application/json'
    }
})
.then(res => {
    return res.json()
})
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e);
});