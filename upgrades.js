
// We need functions for:
// 1. upgrade cost (for next)
// 2. upgrade amount (prb for display)
// 3. calculates effect of an upgrade
// 4. a new upgrade means adding onto the list
// 5. resetting an upgrade
// 6. resetting all upgrades

function nextCost(n){ // upgrade n
    i = 0
    //get scaling cost stuffs idk lol
}
   
function effect(n){
    poly = getPolynomial(n)
    deg = poly.length-1
    sum = new Decimal(0)
    for (i=0;i<= deg;i++){ //look at the ith term in poly which is the deg-i degree term
        sum = sum.plus(Decimal.pow(n,deg-i).times(poly[i]))
    }
    eff = sum.times(n) //base mult; eff stands for effect
    // ok you can do some stuff here
    return eff
}
   
function getSaclingType(n){
    //options:
    // exp, finite, once,	
	// dexp (double exp), pexp ( polynomial exp or 2^(P(x)) )
	// pdexp (poly 2x exp), texp (triple exp), expp ( P(x)**x )
    once = []
    finite = []
    if (once.includes(n)) return "once"
    if (finite.includes(n)) return "finite"
    for (i = 2; i <= Math.ceil(Math.log2(n));i++){
        if (Math.ceil(n**(1/i))**i) == n { //perfect nth power
            if (i >= 5) return "texp"
            return "dexp"
        }
    }
    if (n<10) return "exp"
    if (n < 30) return "expp"
    if ((n%4 == n%20 || n%6 == n%9) && n%3 == 1) return "expp"
    if ( n%6 == 0 || n%10 == 0 || n%15 == 0) return "dexp"
    if (n<100) return "pdexp"
    return "texp"
}
