class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(Unit){
        Unit.res -= this.power;
        if (Unit.res <= 0) {
            console.log(Unit.name + " has successfully been killed!");
        } else {
            console.log(Unit.name + " now has " + Unit.res + " resilience remaining.")
        }
    }
}

class Effect extends Card {
    constructor(name,cost,text,magnitude,power,res) {
        super(name,cost);
        this.text = text;
        this.magnitude = magnitude;
        this.power = power;
        this.res = res;
    }
    target(Unit){
        if (this.res != null){
            Unit.res += this.magnitude;
            console.log(Unit.name + " now has " + Unit.res + " resilience.");
        }
        if (this.power != null){
            Unit.power += this.magnitude;
            console.log(Unit.name + " now has " + Unit.power + " power.");
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja",4,5,4);

const HardAlgo = new Effect("Hard Algorithm",2,"increase target's resilience by 3",2, null, 0);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", -2, null, 0);
const PairProg = new Effect("Pair Programming",3,"increase target's power by 2", 2, 0, null);

HardAlgo.target(RedBeltNinja);

UnhandledPromiseRejection.target(RedBeltNinja);

PairProg.target(RedBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);