/**
 * Created by Administrator on 2018/5/25 0025.
 */
/*案例：淘宝购物条件筛选
  技术：数组过滤器filter*/
// let product=[];
//
// class productInfor{
//   constructor(name,price){
//     this.name=name;
//     this.price=price;
//   }
// }
// let lowPrice=(productObj)=>{
//   if(parseInt(productObj.price)<100){
//     return true;
//   }
// };
//
// product[0]=new productInfor("高档鞋0","200");
// product[1]=new productInfor("高档鞋1","180");
// product[2]=new productInfor("高档鞋2","150");
// product[3]=new productInfor("低档鞋3","80");
// product[4]=new productInfor("低档鞋4","50");
// //console.log("hello world");
// //console.log(parseInt("200.33333"));
// console.log(product);
// console.log(product.filter(lowPrice));
// console.log(typeof(product[1]));
// console.log(typeof(product));
// console.log(product instanceof Array);
// console.log(product instanceof Object);//注意：这两句都输出“true”，因为“Array”也是继承了“Object”
// console.log(product[0] instanceof productInfor);//这句也是输出“true
// console.log(typeof(lowPrice));
// console.log(product.slice(0,5));
/*小结：instanceof 、typeof()
“instanceof”：判断某对象的“constructor”属性值，也就是判断该对象的“类”；
 在非严格模式下，instanceof认为该对象与“父类”相等的，均输出“true”。
 typeof():检测对象类型，只返回六种类型“number、string、boolean、undefined、object、function”
 */
/*案例：淘宝按价格高低进行排序
* 技术：数组排序*/
// let sorFun=((value1,value2)=>{
//   return (value1-value2);
//   });//普通的升降序排列
//
// let priceSort=((productObj1,productObj2)=>{
//   let price1=parseInt(productObj1.price);
//   let price2=parseInt(productObj2.price);
//   return (price1-price2);
//   });
//
// let a=[2,1,5,3,7,4,5,7,4,5,8,3,0,12,15];
// let product=[];
//
// class productInfor{
//   constructor(name,price){
//     this.name=name;
//     this.price=price;
//   }
// }
// let lowPrice=((productObj)=>{
//   if(parseInt(productObj.price)<100){
//     return true;
//   }
// });
//
// product[0]=new productInfor("高档鞋0","200");
// product[1]=new productInfor("高档鞋1","180");
// product[2]=new productInfor("高档鞋2","150");
// product[3]=new productInfor("低档鞋3","80");
// product[4]=new productInfor("低档鞋4","50");
//
// console.log(a.sort(sorFun));
// console.log(product.sort(priceSort));
/*数组排序小结：
* 当数组是对象时，也可通过编辑“compare”函数对其进行排序，传入参数为数组中两个待比较的元素*/
