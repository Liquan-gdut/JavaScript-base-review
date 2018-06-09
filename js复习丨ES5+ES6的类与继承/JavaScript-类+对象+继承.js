/**
 * Created by Administrator on 2018/5/25 0025.
 */
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
  /*注释：属性/方法可以是实例的，也可以是原型的；此处表明实例是独立的，原型是共享的。*/
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
console.log(person1.constructor==person2.constructor);
/*constructor属性：指向该对象的构造函数，也可以理解为指向该对象的直接类型。*/
console.log(Object.getPrototypeOf(person1)==Object.getPrototypeOf(person2));
console.log(Object.keys(person1.prototype));    //新功能：可以枚举出所有原型属性，但ES6中class则不允许。

/*类与对象丨重点小结：
* ①了解ES5中“构造函数和原型组合的方式”创建类；熟练ES6中“class”创建类的方式
*    以后都采用ES6的方式；
* ②理解实例、原型对象，并熟悉其访问过程：先实例、后原型、再父原型*/


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
  /*注释：属性/方法可以是实例的，也可以是原型的；此处表明实例是独立的，原型是共享的。*/
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
*   ①结合“call()调用构造函数”和“原型继承”*/

/*ES6：继承方式---调用super*/

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
    super(name,age,sex);
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































