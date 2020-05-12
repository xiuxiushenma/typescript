






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

// 会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元数据
// 第1个参数对于静态成员是类的构造函数，对于实例成员是类的原型对象
// 第2个参数的名称
// 第3个参数在函数列表中的索引



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
    function enhancer(target: typeof Person) {
      target.prototype.age = 12
      target.prototype.sayAge = function() {
        console.log(age)
      }
    }
    @enhancer
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