重点摘要：

原型对象、原型链的理解；（实质：对内存的理解）

访问一个对象的属性/方法的本质原理，访问过程；

ES5和ES6中类的创建方式，以后采用的创建方式；

ES5和ES6中类的继承方式，以后采用的继承方式；

一、原型对象、原型链

    1、原型对象的定义：存放着“类”及其所有“实例对象”共享的属性或方法；“类”中通过“prototype”属性（一个指针）可访问其原型对象，“实例对象”通过“__proto__”属性（也是指针，在部分浏览器中才有）可访问其原型对象。（注：原型对象中存在“constructor”属性，值为其“构造函数”）

    2、本质：可理解该“原型对象”是处在“静态存储区域”的数据空间，跟ta相连的“类”和所有“实例对象”都能通过指针访           问到ta，也具有“牵一发而动全身”的特点。而“原型对象”中同样能以相同的机制通过它的“__proto__”属性访问             到上一级原型对象，这样就形成一条“链子”了，也就是下面十分形象生动的...

    3、原型链的定义：每个原型对象以相同的机制再通过“__proto__”属性串起来的“链子”，就是“原型链”。原型链的起点是当前“原型对象”，终点是“Object”。访问一个对象的属性/方法，就是基于原型链的，如下：


二、对象属性/方法的访问机制

    采用“就近原则”访问机制，首先查找本对象的“实例属性/方法”，找到则输出，否则将沿着上述的“原型链”一直          寻找。一旦找到则停止寻找，并输出，到达原型链终点还没找到，则输出“undefind”。

三、ES5和ES6中：类的创建方式（注：两种方式直接上代码）

```javascript
/*ES 5.0：类的定义方式，及实例化对象的方式*/
function Person(name,age,sex){
  this._name=name;
  this._age=age;
  this._sex=sex;
  if (this.getName != "function"){
    Person.prototype.getName=function(){
      return this._name;
    }
  }
  // this.getName=function(){
  //   console.log(this._name);
  // }
}

/*ES 6.0：类的定义方式，及实例化对象的方式*/
class Person{
    constructor(name,age,sex){
        this._name=name;
        this._age=age;
        this._sex=sex;
        // this.getName=function(){
        //     return this._name;    //注释：此处表明“getname”是实例方法，一般很少用；
        // };
    }
    getName(){
        return this._name;
    }
    /*表明：下面的测试代码表明，ES6.0中在“constructor”中定义的方法为实例方法，
            在constructor外部定义的方法都是“原型方法”*/
}

let person1=new Person("li",18,"男");    //细节注意：构造函数创建方法记得加上“new”
let person2=new Person("zhang",17,"女");
console.log(person1.getName == person2.getName);
 /*注释：属性/方法可以是实例的，也可以是原型的；此处表明实例是独立的，原型是共享的。*/

console.log(person1.constructor==person2.constructor);
/*constructor属性：指向该对象的构造函数，也可以理解为指向该对象的直接类型。*/

console.log(Object.getPrototypeOf(person1)==Object.getPrototypeOf(person2));
console.log(Object.keys(person1.prototype));    //新发现功能：可以枚举出所有原型属性，但ES6中class则不允许。
```

类与对象丨重点小结：

 ①了解ES5中“构造函数和原型组合的方式”创建类；
   熟练ES6中“class”创建类的方式,以后都采用ES6的方式；

 ②理解实例、原型对象，并熟悉其访问过程：先实例、后原型、再父原型*/

四、ES5和ES6中：继承方式（ES5：组合继承；ES6：extends关键字 + super()）

```javascript
/*ES5.0：继承方式——组合式继承*/
function Person(name,age,sex){
    this._name=name;
    this._age=age;
    this._sex=sex;
    if (Person.getName != "function"){
        Person.prototype.getName=function(){
            return this._name;
        }
        Person.prototype.getAge=function(){
            return this._age;
        }
    }
    // this.getName=function(){
    //   console.log(this._name);
    // }
}
function Student(name,age,sex,num){
  Person.call(this,name,age,sex);   //注意：在借用构造函数，call进行继承时，传入this同时，也要写入新的参数
  this._num=num;
  if (Student.prototype.getName != "function"){
        Student.prototype=Person.prototype;
        Student.prototype.constructor=Student;
  }
}
let per1=new Person("asd",12,"asd","asd");
console.log(per1.getName());

let stu1=new Student("li",18,"男","311500");
let stu2=new Student("zhang",18,"男","311500");
let stu3=new Student("wang",18,"男","311500");

/*有bug未解决：第一次创建的实例“stu1”为什么没有“原型功能”？？*/

console.log(stu1.prototype===stu2.prototype);
//console.log(stu1.getName());
console.log(stu2.getName());
console.log(stu2.getAge());
console.log(stu1.getName==stu2.getName);
console.log(stu3.getName==stu2.getName)
console.log(stu1.getAge)
console.log(Student.prototype.constructor);
/*注意：“prototype”属性是“类”才有的，“实例对象不具备该属性”*/

/*ES5继承小结：
  ①结合“call()调用构造函数”和“原型继承”*/

/*ES6：继承方式---关键字extends + 调用super*/

class Person{
    constructor(name,age,sex){
        this._name=name;
        this._age=age;
        this._sex=sex;
        // this.getName=function(){
        //     return this._name;    //注释：此处表明“getname”是实例方法，一般很少用；
        // };
    }
    getName(){
        return this._name;
    }
    getAge(){
      return this._age;
    }
    /*表明：下面的测试代码表明，ES6.0中在“constructor”中定义的方法为实例方法，
            在constructor外部定义的方法都是“原型方法”*/
}
class Student extends Person{
  constructor(name,age,sex,num){
    super(name,age,sex);     //理解：super()可表示调用父级的构造函数，而此时的this则指向“Student”
    this._num=num;
  }
  getNum(){
    return this._num;
  }
}
let stu1=new Student("li",17,"boy","311500");
let per1=new Person("wang",30,"girl");

console.log(stu1.getName());    //表明：ES6中：当使用“extends”继承时，会自动继承父类的“原型属性/方法”，不必再次声明
console.log(stu1.getName==per1.getName);    //再次证明：子类将自动继承父类的“原型属性/方法”
console.log(stu1.getNum());

/*ES5和ES6丨继承整体小结：
*   ①熟悉两个版本的继承方式：ES5：组合继承；ES6：extends + super
*   ②后续多采用ES6写法。*/
```

整体重点小结：

理解原型对象、及其构成的原型链；

1、对象属性/方法的访问过程；

2、ES5和ES6类的创建；

3、ES5和ES6类的继承。


附：代码文件

1、JavaScript-类+对象+继承.js

2、JavaScript-类+对象+继承案例丨商品分类.js
    
