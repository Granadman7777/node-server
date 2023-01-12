class MyMath {
   static sum = (a, b) => a + b;
   static sub = (a, b) => a - b;
   static multy = (a, b) => a * b;
   static div = (a, b) => a / b;
}
// экспортируем один объект Mymath и более ничего 
// module.exports = MyMath;


// В этом случае мы экспортируем объект в котором лежат 
//module.exports.MyMath = MyMath;
//module.exports.superFunc = function () {}
//module.exports.constants = 'value';


// третий вид экспорта 
module.exportrs = {
    Mymath,
    superFunc: () => {},
    constants: 'value'
}