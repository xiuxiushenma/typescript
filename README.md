## 编译
```
1.如何编译Typescript文件？
  tsc helloworld.ts  
2.是否可以将多个.ts文件合并成一个.js文件？如果是，那么如何做？
  tsc --outFile comman.js file1.ts file2.ts file3.ts  
3.能否自动编译.ts文件，并实时修改.ts文件？
  第一步 tsc --init 生成tsconfig.json 改“outDir”: "./js"
  在VsCode中找到菜单栏 - 任务 - 运行任务 监视tsConfig.json
  或者用命令： tsc --watch file1.ts  
4.如何生成ts配置文件tsconfig.json
  tsc --init
5.tsconfig.json的字段含义
{
  // 编译选项
  "compilerOptions": {
    "incremental": true,                   /* 增量编译：开启监控，和热跟新一样 */
    "target": "es5",                          /* ecma目标版本 */
    "module": "commonjs",                     /* 生成的js模块的规范 */
    "lib": [],                             /*  */
    "allowJs": true,                       /*  */
    "checkJs": true,                       /* */
    "jsx": "preserve",                     /* */
  }
}
```

## 基础类型
```
1.一共有多少基础类型？
  布尔类型 boolean
  数字类型 number
  字符串类型 string
  数组类型 array
  元组类型 tuple
  枚举类型 enum
  任意类型 any
  null 和 undefined
  void类型
  never类型
2.对比js增加了哪几种类型？
  js6种数据类型：boolean，number，string，null，undefined,  引用类型：object
  es6中新增: symbol
  ts中新增5种类型： 
    元组类型 tuple
    枚举类型 enum
    任意类型 any
    void类型
    never类型
3.数组的两种声明方式
  number[]  和  Array<number>
4.元组怎么声明的，和数组有什么区别？
  let zhufeng: [string, number] = ['zhufeng', 124]
  和数组的区别：
             元组                     数组
      每一项可以是不同的类型	    每一项都是同一种类型
         有预定义的长度	             没有长度限制
      用于表示一个固定的结构	      用于表示一个列表
5.枚举如何定义的？
6.any适合用的场景？
  第三方库没有提供类型文件时可以使用any
  类型转换遇到困难时
  数据结构太复杂难以定义
7.dom元素怎么定义类型呢？
  let root:(HTMLElement|null)=document.getElementById('root');
8.怎么去设置dom元素属性呢，怎么规避null报错呢？
  // any可以逃脱类型检测
  let root1:any=document.getElementById('root');
  root1.style.color='red';

  // 必须是(HTMLElement|null)，不能只是HTMLElement
  let root:(HTMLElement|null)=document.getElementById('root');
  // ！！！！！！---------------------重点------------------
  // 如果root是null，那么就没法用style，所有要断言他是不为空的，那就是HTMLElement  
  root!.style.color='red';//root!非空断言操作符  !类型断言
9.undefined和null可以赋值给其他类型吗
  非严格模式下可以
  严格模式下不行： tsconfig中开启： "strict": true会导致严格检测null和undefined   
  但是 strickNullChecks（优先级更高）设置为false，就可以赋值，"strict"就不起作用了，
10.strickNullChecks设置为false和true有什么区别吗
  strickNullChecks设置为ture的话undefined和null开启了了严格检查模式，不允许赋值给其他类型
11.void声明的函数能返回null吗（不能）？能返回undefined吗（能）？
   在strickNullChecks为true的情况，null不兼容，只能返回undefined
   但是如果strickNullChecks为false的情况下，且strict也为false下，返会undefined和null都是可以的
12.never 怎么使用？什么含义？
  never是null undefined的子类型
  含义：返回never的函数 必须存在 无法达到（ unreachable ） 的终点
  场景： 死循环和报错和类型保护
13.never 和 void 有什么区别 
  void 可以被赋值为 null 和 undefined的类型。 never 则是一个不包含值的类型。
  拥有 void 返回值类型的函数能正常运行
  拥有 never 返回值类型的函数无法正常运行，就是没法走到最后，函数里面遇到死循环和异常中断执行了。
14.
```
### 基础类型常见的bug
```
bug1:和全局变量命名冲突的问题!!!!!!!!!!!!!!!!!!!!!!!!
    desc: Cannot redeclare（重新声明） block-scoped(块级) variable(变量) 'name'
    let name: string = 'davie li' // 这里的name已经在全局声明过了
    解决办法：模块化
      如果文件里出现了export或者import,ts会把这个文件当成一个模块，模块里面的变量会变成私有变量，就不会和全局变量起冲突
      export {}
bug2:赋值类型和声明类型不一致的问题
    desc: Type 'string' is not assignable(赋值) to type 'number'
    字符串类型不能赋值给数字类型
    let arr1: number[] = [1, 3, ,4, 'str']
```









## 类型推论
```

```













# 面试经
```
1.void 和 undefined 有什么区别？
2.什么是 never 类型？
3.readonly 和 const 有什么区别？
4.什么是 Abstract Class？
5.什么是 class mixin, 如何实现？
6.typeof 关键词有什么用？
7.keyof 关键词有什么用？
8.tsconfig.json 里 --strictNullChecks 参数的作用是什么？
9.interface 和 type 声明有什么区别？
10.「import ... from」、「 import ... = require()」 和 「import(path: string)」有什么区别？
11.declare 关键字有什么用？
12.module 关键字有什么用？
13.如何处理才能在 TS 中引用 CSS 或者 图片使之不报错？
14.编写 d.ts 来声明下面的 js 文件
class Foo {
}
module.exports = Foo;
module.exports.Bar = 1;
15.namespace 和 module 有什么区别
16.如何实现 module alias?编译成 JS 能否直接运行？
17.import Bar from '@src/Bar';
18.哪些声明类型既可以当做 type 也可以当做 value？

```
