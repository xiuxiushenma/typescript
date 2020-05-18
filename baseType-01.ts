let marrried: boolean = false // 
let age: number = 23 

// !!!!!!!!!!!!!!!!!!!!!!!重点1:和全局变量命名冲突的问题!!!!!!!!!!!!!!!!!!!!!!!!
// Cannot redeclare（重新声明） block-scoped(块级) variable(变量) 'name'
// let name: string = 'davie li' // 这里的name已经在全局声明过了
/*
  解决办法：模块化
  如果文件里出现了export或者import,ts会把这个文件当成一个模块，模块里面的变量会变成私有变量，就不会和全局变量起冲突
  export {}
 */
         

// Type 'string' is not assignable(赋值) to type 'number'
// 字符串类型不能赋值给数字类型
// let arr1: number[] = [1, 3, ,4, 'str']
let arr2: Array<number> = [1, 3, 4, 8]

// 元组： tuple
let zhufeng: [string, number] = ['zhufeng', 124]
// 类型不兼容： 不能超出元组长度
// let zhufengerror: [string, number] = ['zhufeng', 124, 23]


// 枚举



// any
// any就是可以赋值给任意类型
// 第三方库没有提供类型文件时可以使用any
// 类型转换遇到困难时

// any可以逃脱类型检测
let root1:any=document.getElementById('root');
root1.style.color='red';

// 必须是(HTMLElement|null)，不能只是HTMLElement
let root:(HTMLElement|null)=document.getElementById('root');
// ！！！！！！---------------------重点------------------
// 如果root是null，那么就没法用style，所有要断言他是不为空的，那就是HTMLElement  
root!.style.color='red';//root!非空断言操作符  !类型断言


// null和undefined 
// tsconfig中开启： "strict": true会导致严格检测null和undefined    
let x: number;
x = 1;
// x = undefined;    
// x = null;   


// 严格模式下要赋值多个类型：就只能用联合类型了
let y: number | null | undefined;
y = 1;
y = undefined;   
y = null;  


// void 类型
// void 表示没有任何类型
// 当一个函数没有返回值时，TS 会认为它的返回值是 void 类型。
function greeting(name:string):void {
    console.log('hello',name);
    //当我们声明一个变量类型是 void 的时候，它的非严格模式(strictNullChecks:false)下仅可以被赋值为 null 和 undefined
    //严格模式(strictNullChecks:true)下只能返回undefined
    //return null;
    //return undef
}


// never
// never出现的第一种场景： 抛出异常
function error(message: string): never {
  throw new Error(message);
}
let result1 = error('hello');
// 由类型推论得到返回值为 never
function fail() {
  return error("Something failed");
}
let result = fail();

// never出现的第二种场景： 死循环
function infiniteLoop(): never {
  while (true) {}
}

// never出现的第三种场景： 类型保护
function fn(x: number | string) {
  if (typeof x === 'number') {
    // x: number 类型
  } else if (typeof x === 'string') {
    // x: string 类型
  } else {
    // x: never 类型
    // --strictNullChecks 模式下，这里的代码将不会被执行，x 无法被观察
  }
}



// 3.12 包装对象（Wrapper Object）
// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 包装类型不能用对象类型去强制转换
// 当调用基本数据类型方法的时候，JavaScript 会在原始数据类型和对象类型之间做一个迅速的强制性切换
let isOK: boolean = true; // 编译通过
let isOK1: boolean = Boolean(1) // 编译通过
// let isOK2: boolean = new Boolean(1); // 编译失败   期望的 isOK 是一个原始数据类型
