module.exports = function solveEquation(equation) {
  // your implementation
  
    let regexpr = /(-?\s?\d+)/g;
    
    let result = equation.match(regexpr);
    let a = parseInt(result[0]);
    let b = parseInt(result[2].replace(/\s/, ""));
    let c = parseInt(result[3].replace(/\s/, ""));
    
    let d = Math.sqrt(Math.pow(b, 2) - 4*a*c);
    let solutions = [];
    solutions.push(Math.round((-b+d)/(2*a)));
    solutions.push(Math.round((-b-d)/(2*a)));
    return solutions.sort((a, b) => a - b);
}
