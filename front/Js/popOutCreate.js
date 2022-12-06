export const popOutCreate = document.querySelector('.create-hero')
export const heroPanel = document.querySelector('.hero')
export const cancelar = document.querySelector('.cancelar')



export const removePopOut =()=> popOutCreate.style.display = 'none';

export const showPopOut = ()=>  popOutCreate.style.display = 'block';

export const popOutCancelButton = () =>{
    cancelar.addEventListener('click',()=>{
        removePopOut()
        location.reload()
        
     })
}

export function selectHeroRole(role){
    
    if(role === 'guerreiro'){
        console.log(role.selected)
        heroPanel.innerHTML = `<img class="hero-avatar " src="../../assets/guerreiro_avatar1.png"></img>`
    }else if( role === 'mago'){
        heroPanel.innerHTML = `<img class="hero-avatar"  src="../../assets/mago_avatar1.png"></img>` 
    }else{
        heroPanel.innerHTML = `<img class="hero-avatar"  src="../../assets/arqueiro_avatar1.png"></img>`
    }
    return role;
}

