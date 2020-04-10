

function addOneAndHalve(x){
	if x%2 == 1 {return Math.round((x+1)/2)} // so that its an integer
	return 0
}

function oddAndPower(x){
	if x%2 == 1 {return [x,0]}
	y = oddAndPower(Math.round(x/2))
	return [y[0],y[1]+1]
}

function getPolynomial(x){
    q = oddAndPower(n) // q[1] is the degree and q[0] is odd
    deg = q[1]
    coeff = []
	for (i = 1; i<= deg+1;i++){
		coeff.push(0)
	}
    coeff[0] = 1
    x = q[0]
    if deg == 0 { return [Math.round((x-1)/2)]}
    for (i=0;i<deg;i++){
        //we are looking at the deg-i -th coeff
        //we know x is odd
        y = oneAndHalf(x)
        z = oddAndPower(y)
        //z[0] is the new x
        //z[1] is the coeff
        coeff[i] += z[1]
        x = z[0]
	}
    coeff[coeff.length-1] = Math.round((x-1)/2)
    return coeff
}


function getNum(l): //takes a list which repes coeffs, assumes first entry is non zero
    n = l[l.length-1]
    if l.length == 1 {return l[0]*2+1}
    deg = l.length-1
	xs = []
	for (i = 1; i<= deg+1;i++){
		xs.push(0)
	}
    xs[0] = l[l.length-1]
    for (i=0;i<deg;i++){ //we are looking at the i-th coeff
        //xs[0] is what it is at the end of the step
        q = xs[i]*2-1
        if i == 0 {q += 2} //+1 instead of -1
        w = q*2**l[l.length-i-2]
        xs[i+1] = w
	}
    return (xs[xs.length-1]-1)*2**deg


	
	
