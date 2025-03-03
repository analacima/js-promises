const SERVER_URL = 'http://localhost:4000'
const CATEGORIES_URL = `${SERVER_URL}/categories`
const DISHES_URL = `${SERVER_URL}/dishes`
const RESTAURANTS_URL = `${SERVER_URL}/restaurants`

const btn=document.querySelector('#btn');

btn.addEventListener('click',peticionAsyncAwait);
let dishes, categories, restaurants

   
async function peticionAsyncAwait(){
        try{
            const response1=await fetch(CATEGORIES_URL);
            const categories=await response1.json();
            const response2=await fetch(DISHES_URL);
            const dishes=await response2.json();
            const response3=await fetch(RESTAURANTS_URL);
            const restaurants=await response3.json();
            mostrarPlatos(categories, dishes, restaurants); 
        }catch(error){
            console.log(error);
        }
        finally{
            console.log('Proceso finalizado');
        }
    }


    function mostrarPlatos(categories, dishes, restaurants) {
      dishes.forEach((dish) => {
        dish.categoria = categories.find(
          ({ categoriaID: id }) => id === dish.categoriaID
        ).categoria
        dish.restaurante = restaurants.find(
          ({ restauranteID: id }) => id === dish.restauranteID
        ).restaurante
      })
      const contenedor = document.querySelector('#datos')
      let html = ''
      dishes.forEach(({ plato, descripcion, precio, categoria, restaurante }) => {
        html += `
          <h3>${plato}</h3>
          <p>Descripción: ${descripcion || '-'}</p>
          <p>Precio: ${precio} <br/> Categoria: ${categoria} <br/> Restaurante: ${restaurante}</p>
        `
      })
      contenedor.innerHTML = html
    }