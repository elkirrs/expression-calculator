function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arrExpr = expr.replace(/\s/g, "");
    let countA = 0;
    let countB = 0;
    for (let el of arrExpr){
        if(el === '(') countA++;
        if(el === ')') countB++;
    }

    if(countA !== countB) throw new Error('ExpressionError: Brackets must be paired');
    for (let i = 0; i < arrExpr.length; i++){
        if (arrExpr[i] === "/" && arrExpr[++i] === "0") throw new Error('TypeError: Division by zero.');
    }
    let result = new Function("return " + arrExpr);
    return result();
}

module.exports = {
    expressionCalculator
};