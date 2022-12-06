import { CHARACTER } from '../Js/chararacter.js'
import {popOutCreate,showPopOut,selectHeroRole,popOutCancelButton,heroPanel} from '../Js/popOutCreate.js'
import{showHeroStatusCard} from '../Js/heroStatus.js'



const create = document.querySelector('.btn-create-hero')
const confirmar = document.querySelector('.confirmar')
const heroName = document.querySelector('.name')
const roleSelection = document.querySelector('.role-select')




let  heroCreated = []

function createHero(charname,role){
    const newChar = new CHARACTER(charname,role,100,4,10,10,4,10)
    console.log(newChar.agility)
    showHeroStatusCard(
        newChar.name,
        newChar.role,
        newChar.hp,
        newChar.atack,
        newChar.defense,
        newChar.strength,
        newChar.inteligence,
        newChar.agility
        )    
    return newChar
}

roleSelection.addEventListener('click',()=>{
    if(roleSelection.value === 'guerreiro'){
        heroPanel.innerHTML = `<img class="hero-avatar " src="../../assets/guerreiro_avatar1.png"></img>`
    }else if(roleSelection.value === 'mago'){
        heroPanel.innerHTML = `<img class="hero-avatar " src="../../assets/mago_avatar1.png"></img>`
    }else{
        heroPanel.innerHTML = `<img class="hero-avatar " src="../../assets/arqueiro_avatar1.png"></img>`
    }
})



function popOut(){
    showPopOut()
    popOutCancelButton() 
     confirmar.addEventListener('click',()=>{
        let role = roleSelection.value
        let heroname = heroName.value
        selectHeroRole(role)
        console.log(role.selected)
        if(heroname && role){
            let newHero = createHero(heroname,role)
            heroCreated.push(newHero)
            console.log(heroCreated)
        }else{
            alert('Escolha uma classe e nome antes de prosseguir')
           return 
        }
    })

    
}


create.addEventListener('click',()=>{
    popOut() 
})


