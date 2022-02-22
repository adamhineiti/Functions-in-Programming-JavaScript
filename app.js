//Starting off by setting the dragons damage
let dragonDamage = 0;

//Fire attack, ice attack, and poison attack
// Creating buttons and giving them the proper names (Last weeks' homework assignment and lecture)
//Start off by making the fire tag and do the same for ice and poison
let fireAttack = document.createElement("button");
document.body.appendChild(fireAttack);
fireAttack.innerHTML = "Fire Attack";

// This button is for ice
let iceAttack = document.createElement("button");
document.body.appendChild(iceAttack);
iceAttack.innerHTML = "Ice Attack";

//This button is for poison
let poisonAttack = document.createElement("button");
document.body.appendChild(poisonAttack);
poisonAttack.innerHTML = "Poison Attack";

// Creating divs
//using the same idea from last weeks homework assignment to build this part of the code
let element = document.createElement("h1");
element.innerHTML = "Dragon Damage : "+dragonDamage;
document.body.appendChild(element);

// Working on the fire attack button (damage results) repeated code different math
fireAttack.onclick = function() {
    dragonDamage += 3;
    element.innerHTML = "Dragon Damage : "+dragonDamage;
    check_dragonDamage();
}

// Working on the ice attack button (damage results) repeated code different math
iceAttack.onclick = function() {
    dragonDamage += 1;
    element.innerHTML = "Dragon Damage : "+dragonDamage;
    check_dragonDamage();
}
// Working on the poison attack button (damage results) repeated code different math
poisonAttack.onclick = function() {
    dragonDamage += 4;
    element.innerHTML = "Dragon Damage : "+dragonDamage;
    check_dragonDamage();
}

// WIN
let win = document.createElement("h2");
win.innerHTML = "";
document.body.appendChild(win);

// What will show on the webpage, after battle results
function check_dragonDamage() {
    if (dragonDamage >= 10) {
        win.innerHTML = "You Win";
    }
}
