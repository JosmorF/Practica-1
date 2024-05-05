let dataProductos=[];

function loadProducts(){
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then(function(data){
        data.forEach(function(producto){
        dataProductos.push(producto);
        })
        });   
    }

loadProducts();

function displayProducts(array){  

let html = '';
    array.forEach(function(prod){
        html += `
        <div><a id="${prod.id}" onclick="cargarProducto(this.id)">${prod.title}</a></div>
          `;
        })
        document.getElementById('gridd').innerHTML = html;
        mostrarSection1();
}


function cargarProducto(id) {

    let html = '';
    html += `
    <div>${dataProductos[id-1].title}</div>
    <div>${dataProductos[id-1].price} </div>
    <div>${dataProductos[id-1].category}</div>
      `;

    document.getElementById('grilla').innerHTML = html;
    mostrarSection2();
    
}

function mostrarSection1(){
    let x = document.getElementById("seccion1");
    let y = document.getElementById("seccion2");
    x.style.display = "block";
    y.style.display = "none";
}

function mostrarSection2(){
    let x = document.getElementById("seccion1");
    let y = document.getElementById("seccion2");
    x.style.display = "none";
    y.style.display = "block";
}






