module.exports = function reverse(n) {
    const numToString = n.toString();
    const toArray = numToString.split("");
    const arrReverse = toArray.reverse();
    const arrToString = arrReverse.join("");
    const stringToNum = parseFloat(arrToString);
    return stringToNum;
};
