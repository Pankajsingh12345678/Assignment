MCQ Question-

Question  1 --> option (b)
Question  2 --> option (b)
Question  3 --> option (b)
Question  4 --> option (a)
Question  5 --> option (a)
Question  6 --> option (c)
Question  8 --> option (c)
Question 10 --> option (c)
Question 11 --> option (b)
Question 12 --> option (a)
Question 13 --> option (a)


Question  7 --> CODE
function cb1(x, y) {
    return x + y;
}
function cb2(x, y) {
    return x - y;
}
function main(cb1, cb2, x, y) {
    console.log("Result of cb1 (addition):", cb1(x, y));
    console.log("Result of cb2 (subtraction):", cb2(x, y));
}
let x = 11;
let y = 4;
main(cb1, cb2, x, y);