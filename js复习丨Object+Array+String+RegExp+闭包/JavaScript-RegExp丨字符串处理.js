/**
 * Created by Administrator on 2018/5/25 0025.
 */

// let a="   hello world  ";
// let patt1=/^ /g;
// let patt2=/ $/g;
// //console.log(patt.exec(a));
// str2=a.replace(" ","");
// str3=a.replace(/\b\s/g,"");
//
// //console.log(str2);
// console.log(str3)

// let a=[1,2,3,4,5,{i:6}]
//
// let i=7;
// // let twoTime=function(value){
// //     console.log(value*2);
// // }
// // console.log(a);
// // console.log(a.forEach(twoTime));
//
// if(a.indexOf(2)!="-1"){
//     console.log(true);
// }else{
//     console.log(false);
// }
// let reg1=/[a-z]/i;
// let reg2=/[a-z]/i;
// //console.log(reg1===reg2);   //结果输出：false。表明：ES5、ES6以后，每对相等的Reg对象都是独立的实例。
// for (let i=0;i<10;i++){
//      re=new RegExp("cat","g");
//     console.log(re.test("cataksdasdfdasdf"));     //再次表明：ES5、ES6以后，每对相等的Reg对象都是独立的实例。
// }
/*实例：将字符串开头结尾的“空格符”删除掉*/
 //let str="   hello world hello   ";
// console.log((str.replace(/(^\s+)|(\s+$)/g,"")).length);     //正则表达式法
// console.log(str.trim("").length)        //内置函数法
// let result=str.match(/\w/);
// console.log(result[0]);

// reg=/hello/g;
// a=reg.exec(str)
// console.log(a.index)
// console.log("11 asd  22asd 33dfa  44aedx".match(/\d+/g));
// console.log(str.match(/[a-z]+/gi))
//表明：当字符串使用match功能时，若是采用“g”，则每次正确匹配完一个后，将以这个作为起点，接着继续匹配。

/*实例：解析URL
* 技术：正则表达式、（）的作用、match功能机制*/
// let url=/(\w+):\/\/([\w.]+)\/([\w-]+)/;
// let str="my github is:https://www.github.com/Liquan-gdut";
// res=str.match(url);
// for(let i=0;i<res.length;i++){
//     console.log(res[i]);
// }
/*小结str.match()：
* ①可以用来解析字符串，并返回字符串的特定内容；
* ②match()+（），结果将返回“arr[0]:完整的匹配；arr[1]:第一个子括号；以此类推...”*/

// let str1="1",str2="2";
// console.log(typeof (str1+str2))     //表明：拼接的时候，编程语言不会自作主张帮你转换类型的，str使用“+”，结果类型依然是str
// console.log(parseInt(str1)+parseInt(str2))

/*实例：对大量单词，按首字母进行排序
* 技术：arr.sort(),str.localeCompare()*/
let a=["ajf","udh","bej","kjd","ghs","elj","dhj","cljff"];
let upsort=(value1,value2)=>{
  return value1.localeCompare(value2);
};
console.log(a.sort(upsort));















