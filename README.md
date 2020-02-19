* 要理解 useRef,首先要明白一些知识
```
let obj={name:'libai'}
let obj2=obj
obj2['name']='zhangfei'

console.log(obj===obj2) // true
console.log(obj.name) // 'zhangfei'
```
> 为什么 obj===obj2 返回的是 true？因为二者的值（一个内存地址）是一样的

> 为什么 obj.name 变成了'zhangfei'？因为 obj2 修改了某处堆内存（A29:{name:'libai'}=>A29:{name:'zhangfei'}）

* react 团队意识到，如果每次在组件中用 useRef 声明的变量都是"值相同的的对象（指向同一片内存空间）"，且每次修改只改变对象的属性值，不进行重定向，那么无论组件重新执行多少次，其实都只占用了内存的同一片空间。
```
const nRef = useRef(0) // nRef={current:0},尽管每次组件执行都会得到一个新声明的变量 nRef,但这些 nRef 的值是相同的，是同一个地址值

nRef.current += 1 // 修改 nRef 的 current 属性值
```
* 综上，useRef(0) 的结果一定是一个对象
* 相比之下，useState/useReducer 是做不到以上事情的。
```
let a=2
let b=2
```
> a===b 返回 true 还是 false？true，因为 === 判断依据是两个变量的值是否一致，2 和 2 相同
> a 与 b 的内存地址一样吗？不一样，只是两个栈地址存储的内容一样罢了
```
// 如果 useState() 的结果为对象，由于 seTObj 总是重定向，每次声明的 obj 值都是不同的
const [obj,seTObj] = useState({num:0})
seTObj({...obj,num:obj.num+10})
```

#### nRef.current += 1 不会主动触发组件执行


#### react 中，组件执行的意义是什么？
```
UI=f(data)
```
f 即 App 之类的函数组件。f(data)就是执行组件，得到新的 UI

#### useRef 和 useState 的区别
1. useRef 的目的是创造一个不变的值。useState 的目的是维护一个组件的内部变量
2. useRef 的结果一定是对象，而 useState 在粒度上偏向于基础类型
3. useRef 不会触发组件执行，useState 会。

#### vue3 也有 ref，且会自动 render