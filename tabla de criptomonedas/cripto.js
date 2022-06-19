let endpoint = 'https://api.binance.com/api/v3/ticker/price'

function verCotizacion(){
fetch(endpoint)
    .then( respuesta => respuesta.json())
    .then( datos => mostrarData(datos))
    .catch( e => console.log(e))

const mostrarData = (data)=>{
    let body =''
    for (let i=0; i< data.length; i++) {
        body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`

    }
    document.getElementById('data').innerHTML = body
}
}
 
function descargarCotizacion(){ 
    fetch(endpoint)
    .then(response => response.json() )
    .then(data =>{
        var json= JSON.stringify(data);
        var blob= new Blob([json], {type:'aplication/json'});
        var url=URL.createObjectURL(blob);
        var a= document.createElement('a');
        a.href=url;
        a.download = 'cripto.json';
        a.click();
    });
}

