
// ok so this is the file where most of the heavy lifting is


function getDefaultSave(){ //name says it all lol
	return {
	polynomials: new Decimal(10),
	g1: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g2: {
		cost: new Decimal(10), //tbd
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: { //tbd
		type: "exp",
		exp: 100} //might need to make this a decimal
	},
	g3: {
		cost: new Decimal(1000),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "pexp",
		exp: 10, //might need to make this a decimal
		p: function (x){return x.plus(x.pow(2).times(.001))} //not sure this syntax works and also prb wanna change the function
		} 
	}, // also from here on out everything (inside) is left untouched
	g4: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g5: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g1: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g6: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g7: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g8: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g9: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g10: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g11: {
		cost: new Decimal(1),
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	unaccessible: {
		amount: new Decimal(0)
		upgrades: []
		possibleUpgrades: [] //tbd
		costs: []//for said tbd upgs
		ab: {
			unlocked: [],
			Times: [],
			Costs: [],
			Last: [] // fill this with new Date().getTime()
		}
	},
	upgrades: {
		purchased: [] //this list contains elements in which are the number of upgrades of i+1 in the i-th slot
		costs: [] //for abv upgrades
		kept: [] //contains true/flase
		ab: [] //contains true/false
	} //idk what else is needed but ig this is good enough for now
	last: new Date().getTime()
}

function getGenMult(n) { //n is the gen number
	m = new Decimal(1)
	l = user.upgrades.purchased.length 
	i = 0
	while (n**i<=l) {
		i += 1
		// ok now get the mult for the n**i-th upgrade
		//then multiply m by it
	}
	//you can insert more mults here
	return m
}

function getProduction(n) { //n is the gen number
	m = getGenMult(n)
	p = m //production
	p = p.times(user["g" + n].amount) //multiplying by the number of them :)
	//ok you can do other things here
}












