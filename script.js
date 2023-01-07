
fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
.then((response=>response.json()))
.then((data)=>{

data.forEach(element => {
    let cars = {
        ...element,
        codigo: element.codigo,
        nome: element.nome
    }
    carsfn(cars)
});
}).catch((err)=>console.log(err))


function carsfn({codigo,nome})
{
    document.body.innerHTML +=
    `
    <div class= "container">
    <p><span>Codigo : </span>${codigo} </p>
    <p><span>Nome : </span>${nome} </p>
  
    </div>
    `
}








