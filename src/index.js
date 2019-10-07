module.exports = function multiply(first, second) {
    let bigIntFirst  = BigInt(first);  
    let bigIntSecond = BigInt(second);

    let multiplication = bigIntFirst * bigIntSecond;
    let result = String(multiplication);
    let number = String(result.match(/\d+/g));
    return number;
}