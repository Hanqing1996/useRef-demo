> 在 useState 中，每次的 n 总是新的 n（声明多次），如果我想要一个贯穿始终的状态，应该这么做？
1. 用 vue3
2. react：用 useRef

* nRef.current+=1 不会触发 render
* 如果在 nRef.current+=1 后手动触发 render，那么


React.useRef(0) 原理

```

```