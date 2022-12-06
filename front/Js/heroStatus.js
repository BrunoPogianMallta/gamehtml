 const heroNameStatus = document.querySelector('.hero-name-status');
 const heroRoleStatus = document.querySelector('.hero-role-status');
 const heroStatusBoard = document.querySelector('#hero-status-board');
 const hpStatus = document.querySelector('.hp-status');
 const atackStatus = document.querySelector('.atack-status');
 const defenseStatus = document.querySelector('.defense-status');
 const strengthStatus = document.querySelector('.strength-status');
 const intelectStatus = document.querySelector('.intelect-status');
 const agilityStatus = document.querySelector('.agility-status');


export function showHeroStatusCard(name,role,hp,atack,defense,strength,intelect,agility){
    heroNameStatus.innerHTML = `${name}`
    heroRoleStatus.innerHTML = `${role}`
    hpStatus.innerHTML =`${hp}`
    atackStatus.innerHTML =`${atack}`
    defenseStatus.innerHTML =`${defense}`
    strengthStatus.innerHTML =`${strength}`
    intelectStatus.innerHTML =`${intelect}`
    agilityStatus.innerHTML =`${agility}`

    heroStatusBoard.style.display ='block'
    
}




