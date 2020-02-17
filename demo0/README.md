> 在 useState 中，每次的 n 总是新的 n（声明多次），如果我想要一个贯穿始终的状态，应该这么做？
1. 用 vue3
2. react：用 useRef

* nRef.current+=1 后不会主动触发 render，但是在 render 由于别的原因被触发后, nRef.current 将发生更新

React.useRef(0) 原理

```

```