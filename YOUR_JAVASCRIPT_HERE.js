const hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { type: "", damage: 2 },

}

function gameGuidelines() {
    const game = document.getElementById('game')
    game.innerHTML = `
    <h2>Game Guidelines</h2>
    <h4>The Faceless Men are a guild of assassins based in the Free City of Braavos.</h4>
    <p>Faceless Men are trained to relinquish their former identities and become "no one", which allows them to become entirely different people, all in service of the Many-Faced God. They also believe that, as servants of death, they must serve above all else and that they must deliver upon certain people the "gift" of death.
    </p>
      `
}

function rest(person) {
    person.health = 10

    if (person.health = 10) {
        window.alert('Health restored to 10. You`re ready to become "NO ONE" 👤')

    }

    if (person.health !== 10) {
        hero.health = 10
    }
    return person

}


function pickUpItem(person, weapon) {
    person.inventory.push(weapon)
    window.alert(`You picked up: ${weapon.type}
Damage: ${weapon.damage}`)

}


const weapon = { type: 'dagger', damage: 2 }


function equipWeapon(person) {
    hero.weapon = hero.inventory[0]
    
    if (person.inventory.length > 0) {
        person.weapon = person.inventory[0]
    }

}


function changeName(person) {
    person.name = window.prompt('Type in the name of your hero:')
    return person

}
changeName(hero)


function displayStats(person) {
    const stats = document.createElement('p')
    stats.innerText = `
    Name: ${person.name}
    Inventory: ${person.inventory}
    Health: ${person.health}
    Weapon: ${hero.weapon.type}, Damage: ${hero.weapon.damage}
    `
    const display = document.getElementById('stats')
    display.appendChild(stats)

}

displayStats(hero)

