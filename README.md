# 编译
```
1.如何编译Typescript文件？
  tsc helloworld.ts  
2.是否可以将多个.ts文件合并成一个.js文件？如果是，那么如何做？
  tsc --outFile comman.js file1.ts file2.ts file3.ts  
3.能否自动编译.ts文件，并实时修改.ts文件？
  tsc --watch file1.ts  
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
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}
```

# 基础类型知识点
```
1.一共有多少基础类型？
2.对比js增加了哪几种类型？
```
## 基础类型常见的bug
```
  bug1:和全局变量命名冲突的问题!!!!!!!!!!!!!!!!!!!!!!!!
  desc: Cannot redeclare（重新声明） block-scoped(块级) variable(变量) 'name'
  let name: string = 'davie li' // 这里的name已经在全局声明过了
  解决办法：模块化
    如果文件里出现了export或者import,ts会把这个文件当成一个模块，模块里面的变量会变成私有变量，就不会和全局变量起冲突
    export {}
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
