const btn=document.querySelector('#btn');

//btn.addEventListener('click',peticionConPromesas);
btn.addEventListener('click',peticionAsyncAwait);

function peticionConPromesas(){
    // vamos a obtener los usuarios de la API
    fetch('https://jsonplaceholder.typicode.com/users')
    
    //.then(response=>console.log(response))
    .then(response=>response.json())
    .then(users=>mostrarUsuarios(users))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Proceso finalizado'));
    
};

async function peticionAsyncAwait(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const users=await response.json();
        mostrarUsuarios(users);
    }catch(error){
        console.log(error);
    }
    finally{
        console.log('Proceso finalizado');
    }
}


const mostrarUsuarios=(users)=>{
    const contenedor=document.querySelector('#datos');
    let html='';
    users.forEach(({name,email,address})=>{
        html+=`
        <div>
            <h3>${name}</h3>
            <p>Email: ${email} Ciudad: ${address.city}</p>
        </div>
        `
    });
    contenedor.innerHTML=html;

}