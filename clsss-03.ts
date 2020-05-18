

// 5.3 参数属性
// 注意下面这两个是等效的
class User1 {
  myname: string;
  constructor(myname: string) {
      this.myname = myname;
  }
  get name() {
      return this.myname;
  }
  set name(value) {
      this.myname = value;
  }
}
let user1 = new User1('zhufeng');
user1.name = 'jiagou'; 


class User {
    // 这里的public替代了上面的两行代码，和上面是同一个效果
    // 注意这里的public怎么用的  实例属性的声明， 实例属性的赋值
    // myname: string;

    // 5.4修饰符： readonly 只读
    public readonly age = 123
    constructor(public myname: string) {
      // this.myname = myname;
      // this.age = age
    }
    get name() {
        return this.myname;
    }
    set name(value) {
        this.myname = value;
    }
}
let user = new User('zhufeng');
user.name = 'jiagou'; 

// 5.5 继承 和 关键字
// 继承了什么？ 继承了实例属性， 原型上的方法， 子类继承了父上的静态属性和静态方法，必须用子类获取和调用，用子类实例是没法获取和调用的
// public不能修饰类
class Father {
  // 类里面 子类 其它任何地方外边都可以访问
  public name: string
  // 自己类里面 和 子类 都可以访问,其它任何地方不能访问
  protected age: number
  // 类里面可以访问， 子类和其它任何地方都不可以访问
  private money: number
  // 静态属性：获取用自己的类名
  static className = 'Father';
  // 静态方法：用自己的类名调用
  static getClassName() {
      return Father.className;
  }
  constructor(name:string, age:number, money:number) {//构造函数
    this.name=name;
    this.age=age;
    this.money=money;
  }
  getName():string {
    return this.name;
  }
  getAge():number {
    return this.age;
  }
  getMoney():number {
    return this.money;
  }
  setName(name:string): void{
      this.name=name;
  }
}

class Child extends Father {
  constructor(name:string,age:number,money:number) {
      super(name,age,money);
  }
  desc() {
    // 在子类中访问： money是private的，  类里面可以访问，子类和其它任何地方都不可以访问
    console.log(`${this.name} ${this.age} ${this.money}`)
  };
}
let child = new Child('zfpx',10,1000);

child.getAge()
child.getMoney()
child.getName()
// protected 自己类里面和子类都可以访问,其它任何地方不能访问
child.age
// private 类里面可以访问,子类和其它任何地方都不可以访问
child.money
// 类里面 子类 子类实例都可以访问
child.name

// 子类继承了父类的静态属性，获取用子类类名去获取
console.log(Child.className)
// 子类继承了父类的静态方法，获取用子类类名去调用
Child.getClassName()


// 5.6类的装饰器
// 用在类声明之前，用来监视修改和替换类的定义
// 要使用装饰器必须打开tsconfig.json中的  experimentalDecorators


// 命名空间：可以在一个ts文件中声明同名的变量
namespace d {
    // 类的装饰器其实是一个函数,参数是当前类

    // 定义接口来声明实例，避过通过装饰器添加的新的属性和方法在实例属性上找不到的报错
    // 同名的类和接口的属性会合并
    interface Person {
      age: number;
      sayAge: () => void
    }

    // 这里target是这个类，要么用any 要么用 typeof Person （必须定义Person接口才能用）或者 Function 或者 new () => Perso
    // 声明一个类： 产生两个类型，这里要用约束类类型的，而传进去是约束实例类型的
    //    一个是约束实例类型  { name: string, age: number }
    //    一个是约束类类型 Peroson
    // function enhancer(target: typeof Person) {
    //   target.prototype.age = 12
    //   target.prototype.sayAge = function() {
    //     console.log(age)
    //   }
    // }
    // @enhancer

    // 如果age我要传入呢？装饰器函数还可以这么写： 工长模式写装饰器
    // function enhancer(age: number) {
    //   return function enhancer(target: typeof Person) {
    //     target.prototype.age = age
    //     target.prototype.sayAge = function() {
    //       console.log(age)
    //     }
    //   }
    // }
    // @enhancer(12)

    // 上面是装饰器修改类，装饰器还可以替换类
    // 注意替换类的话：类的结构要一至，就是装饰器返回的类中必须包含原来类的全部属性，属性只能多（新增），不能少
    // function enhancer(target: any) {
    //   return class {
    //     // 原来类的属性和方法
    //     age: number = 10;
    //     constructor(age: number) {
    //       this.age = age
    //     }
    //     // 装饰器新增的属性和方法
    //     name: string = 'jiagou';
    //     eat() {
    //       console.log(this.name)
    //     }
    //   }
    // }
    // @enhancer
    // // 但是装饰器装饰的类必须结构一样
    // class Person {
    //   age: number = 10;
    //   constructor(age: number) {
    //     this.age = age
    //   }
    // }

    class Person {
    }
    // age和sayage属性（通过装饰器新加的属性）在Person上没有定义，p如果是Person定义类型的话，age和sayAge找不到
    let p: Person = new Person()
    p.age
    p.sayAge

    //----------------------------怎么处理上面的问题呢-------------------------------
    // 用any代替Person去定义类型
    // 或者定义Person接口: 

    // let p: any = new Person()
    // p.age
    // p.sayAge
}






// 5.7属性装饰器

function upperCase(target: any, property: string) {
  let value = target[property]
  const getter = () => value
  const setter = (newVal: string) => {
    value = newVal.toUpperCase()
  }
  if (delete target[property]) {
    Object.defineProperty(target, property, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}
class Person {
  @upperCase
  name: string = 'zhufeng'
}
let p = new Person()
p.name = 'zhufeng'
console.log(p)















/***
 *  抽象类
 *  抽象描述一种抽象的概念，无法被实例化，只能被继承
    无法创建抽象类的实例
    抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现，而且必须实现
 * */ 


abstract class Animal {
    name!:string;
    abstract speak():void;
}
class Cat extends Animal{
    speak(){
        console.log('喵喵喵');
    }
}
// 不能创建抽象类的实例
let animal = new Animal();//Cannot create an instance of an abstract class
animal.speak();
let cat = new Cat();
cat.speak();



/**
 * 修饰符
 * 访问控制符 private protected public
 * 只读 readonly  用在编译阶段的
 * 静态属性
 * 抽象类 抽象方法
 */





/**
 * 重写和重载
 * 重写是指子类重写继承自父类中的方法
 * 重载是指为同一个函数提供多个类型定义
 */

class Animal2{
  speak(word:string):string{
      return '动作叫:'+word;
  }
}
class Cat2 extends Animal2{
  speak(word:string):string{
      return '猫叫:'+word;
  }
}
let cat2 = new Cat2();
console.log(cat2.speak('hello'));
//--------------------------------------------
function double(val:number):number
function double(val:string):string
function double(val:any):any{
if(typeof val == 'number'){
  return val *2;
}
return val + val;
}
let r = double(1);
console.log(r);



// 继承 vs 多态
// 继承(Inheritance)子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
// 多态(Polymorphism)由继承而产生了相关的不同的类，对同一个方法可以有不同的行为

// class Animal{
//   speak(word:string):string{
//       return 'Animal: '+word;
//   }
// }
// class Cat extends Animal{
//   speak(word:string):string{
//       return 'Cat:'+word;
//   }
// }
// class Dog extends Animal{
//   speak(word:string):string{
//       return 'Dog:'+word;
//   }
// }
// let cat = new Cat();
// console.log(cat.speak('hello'));
// let dog = new Dog();
// console.log(dog.speak('hello'));