const ATTACK_VALUE = 10;

let ChosenMaxLife = 100;
let currentMonsterHealth = ChosenMaxLife;
let currentPlayerHealth = ChosenMaxLife;

adjustHealthBars(ChosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);
