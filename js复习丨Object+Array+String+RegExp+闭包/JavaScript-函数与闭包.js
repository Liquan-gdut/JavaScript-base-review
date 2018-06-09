function creatCompar(name){
    var n=0;
    return function (obj1,obj2) {
        var value1=obj1[name];
        var value2=obj2[name];
        //return value1.localeCompare(value2);
        return ++n;
    };
}
var compareName=creatCompar("name");
var result1=compareName({name:"Niclo"},{name:"Hack"});
var result2=compareName({name:"Niclo"},{name:"Hack"});
var result3=compareName({name:"Niclo"},{name:"Hack"});
console.log(result1);       //输出：1
console.log(result2);       //输出：2
console.log(result3);       //输出：3      表明：闭包会保留上一次的执行结果，每一次执行都是新建一个作用域。
//console.log(n);           //输出：undefined
/*闭包小结：
*   ①定义：一个函数可以访问另一个函数的变量。通常创建方式就是在一个函数内部定义另一个函数。
*   ②在理解闭包前得先了解下js作用域链的物理本质：js的每一个作用域是一个对象列表，函数执行结束后不一定会被释放的，C++则是堆栈结构，函数结束就自动释放内存。一开始就是被这个搞混的。
*   ③普通的js函数在执行结束后，它的作用域链和内存会被释放掉，但是闭包作为返回值时，就得注意了，它在执行时作用域链大概是这样的：每一次执行结束后，它不会被自动释放掉；当下一次执行时会创建一个新的作用域链，而且新作用域可以捕捉到上一次的执行结果，也就是说可以保留上一次执行结果。
*   ④综上，很明显可以看到它的优缺点：可以保留上一次的执行结果，但是不注意的话会消耗大量内存，容易产生内存泄漏。*/








