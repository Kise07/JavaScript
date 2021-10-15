const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

// Global Constant
const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1

const enteredValue = prompt('Maximum life of you and the monster.', '100');

let ChosenMaxLife = parseInt(enteredValue);

if (isNaN(ChosenMaxLife) || ChosenMaxLife <= 0) {
  ChosenMaxLife = 100;
}

let currentMonsterHealth = ChosenMaxLife;
let currentPlayerHealth = ChosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(ChosenMaxLife);

function reset() {
  // Reset the Initalized Lifes
  currentMonsterHealth = ChosenMaxLife;
  currentPlayerHealth = ChosenMaxLife;
  resetGame(ChosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    //Using Truthy
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === MODE_ATTACK) { // Global For Utilzing
    maxDamage = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) { // Global For Utilzing
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  // healbtn
  let healValue;
  if (currentPlayerHealth >= ChosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than your max initial health.");
    healValue = ChosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE; //To increse the health
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
