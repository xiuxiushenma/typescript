# 编译
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

# 基础类型知识点
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
  ts中新增5z类型： 
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
