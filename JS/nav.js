// Barra de navegacion
const crearNav = () => {
    let nav = document.querySelector ('.navbar');
    nav.innerHTML =`  <div class="nav">
    <h1 class="logo1">BVCKNE$$.</h1>
<div class="navitems">
   <div class="busqueda">
       <input type="text" class="buscar" placeholder="Buscar producto">
       <button class="btnbusc">Buscar</button>
   </div>
</div>
</div>
<ul class="linkscont">
   <li class="link-item"><a href="Home.html" class="link">Home</a></li>
   <li class="link-item"><a href="Productos.html" class="link">Productos</a></li>
   <li class="link-item"><a href="Contacto.html" class="link">Contacto</a></li>
</ul>`
}
crearNav();