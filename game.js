
// ok so this is the file where most of the heavy lifting is


function getDefaultSave(){ //name says it all lol
	return {
	polynomials: new Decimal(10),
	g1: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
			type: "exp",
			base: new Decimal(1),
			exp: 10} //might need to make this a decimal
	},
	g2: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: { //tbd
		type: "exp",
		exp: 100} //might need to make this a decimal
	},
	g3: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "pexp",
		exp: 10, //might need to make this a decimal
		polynomial: function (x){return x.plus(x.pow(2).times(.001))} //not sure this syntax works and also prb wanna change the function
		} 
	}, // also from here on out everything (inside) is left untouched
	g4: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g5: {
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
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g7: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g8: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g9: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g10: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	g11: {
		amount: new Decimal(0),
		bought: new Decimal(0),
		scaling: {
		type: "exp",
		exp: 10} //might need to make this a decimal
	},
	unaccessible: {
		amount: new Decimal(0),
		upgrades: [],
		possibleUpgrades: [], //tbd
		costs: [],//for said tbd upgs
		ab: {
			unlocked: [],
			Times: [],
			Costs: [],
			Last: [] // fill this with new Date().getTime()
		}
	},
	upgrades: {
		purchased: [], //this list contains elements in which are the number of upgrades of i+1 in the i-th slot
		costs: [], //for abv upgrades
		kept: [], //contains true/flase
		ab: [], //contains true/false
	}, //idk what else is needed but ig this is good enough for now
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

// FOR DIFFERENT SCALINGS WHAT IS IN DATA?
// EXP: coeff, base 
// FINITE: array named l
// ONCE: base 
// DEXP: coeff, base, exp:{coeff,base}
// PEXP: coeff, base, polynomial (function)
// PDEXP: coeff, base, exp:{coeff,base,polynomial}
// TEXP: coeff, base, exp:{coeff,base,exp2:{coeff,base}}
// EXPP: coeff, polynomial
	
	
function scaling(amount,data){ //it should return the next cost
	// valid things for data.type are:
	// exp, finite, once,	
	// dexp (double exp), pexp ( polynomial exp or 2^(P(x)) )
	// pdexp (poly 2x exp), texp (triple exp), expp P(x)**x
	if (data.type == "exp"){
		mult = Decimal.pow(data.base,amount)
		return data.coeff.times(mult)
	}
	if (data.type == "finite"){
		return data.l[amount]
	}
	if (data.type == "once") return data.base
	if (data.type == "dexp"){
		exponent = (data.exp.base).pow(amount).times(data.exp.coeff)
		return Decimal.pow(data.base,exponent).times(data.coeff)
	}
	if (data.type == "pexp"){
		exponent = data.polynomial(amount)
		return Decimal.pow(data.base,exponent).times(data.coeff)
	}
	if (data.type == "pdexp"){
		exponent1 = data.exp.polynomial(amount)
		exponent2 = Decimal.pow(data.exp.base,exponent1).times(data.exp.coeff)
		return Decimal.pow(data.base,exponent2).times(data.coeff)
	}
	if (data.type = "texp"){
		exponent1 = Decimal.pow(data.exp.exp2.base,amount).times(data.exp.exp2.coeff)
		exponent2 = Decimal.pow(data.exp.base,exponent1).times(data.exp.coeff)
		return Decimal.pow(data.base,exponent2).times(data.coeff)
	}
	if (data.type = "expp") {
		base = data.polynomial(amount)
		return Decimal.pow(base,amount).times(data.coeff)
	}
	return ["you messed up",data,amount]
}


function getNextGenCost(n) {
	
	
	
}





//saving functions (currently incomplete) 

function save() {
  localStorage.setItem("save test", JSON.stringify(user));
}

function load() {
  var save = JSON.parse(localStorage.getItem("save test"));
  if (localStorage.getItem("save test") !== null) {
    user = convertSave(save, getDefaultSave());
    updateSave()
  }
  // document.getElementById("notation").innerHTML = "Notation: " + user.options.notation
  return user;
}

function convertSave(obj, obj2) {
  if (typeof obj === "object" && obj !== null && typeof obj2 === "object" && obj2 !== null) {
    for (var i in obj) {
      obj2[i] = convertSave(obj[i], obj2[i]);
    }
    return obj2;
  } else {
    return obj;
  }
}

function expo() {
  var exp = btoa(JSON.stringify(user));
  let output = document.getElementById('export thing');
  let parent = output.parentElement;

  parent.style.display = "";
  output.value = exp;

  output.onblur = function() {
    parent.style.display = "none";
  }
  output.focus();
  output.select();

  try {
    if (document.execCommand('copy')) {
      document.getElementById("export status").style.display = "";
      output.blur();
      document.getElementById("export").innerHTML = "Close";
      document.getElementById("export").onclick = function() {
        close();
      };
    }
  } catch (ex) {
    // aww
  }
}

function close() {
  document.getElementById("export status").style.display = "none";
  document.getElementById("export").innerHTML = "Export";
  document.getElementById("export").onclick = function() {
    expo();
  };
}

function impo() {
  var save = window.prompt("Paste your save here");
  if (save === "") {
    //:C
  } else {
    save = JSON.parse(atob(save));

    user = convertSave(save, getDefaultSave());
    updateSave()
  }
}



