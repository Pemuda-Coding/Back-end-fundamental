const Tiger = require('./Tiger.js');
const Wolf = require('./Wolf.js');

const figthing = (tiger, wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }

    if(wolf.strength > tiger.strength){
        wolf.growl();
        return;
    }
    console.log(`Tiger and Wolf have same strength`);
}

const tiger = new Tiger();
const wolf = new Wolf();

figthing(tiger,wolf);