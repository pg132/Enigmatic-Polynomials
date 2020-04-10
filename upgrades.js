
// We need functions for:
// 1. upgrade cost (for next)
// 2. upgrade amount (prb for display)
// 3. calculates effect of an upgrade
// 4. a new upgrade means adding onto the list
// 5. resetting an upgrade
// 6. resetting all upgrades

function nextCost(n): // upgrade n
    i = 0
    //get scaling cost stuffs idk lol
   
function effect(n):
    poly = getPolynomial(n)
    deg = poly.length-1
    sum = new Decimal(0)
    for (i=0;i<= deg;i++){ //look at the ith term in poly which is the deg-i degree term
        sum = sum.plus(Decimal.pow(n,deg-i).times(poly[i]))
    }
    eff = sum.times(n) //base mult; eff stands for effect
    // ok you can do some stuff here
    return e
   
