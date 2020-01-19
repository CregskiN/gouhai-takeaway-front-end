# 够嗨外卖(前端)v2.0.0 - 重构ing  
   
脚手架  create-react-app  

### npm包说明
```
yarn add react-router-dom
yarn add styled-components
yarn add immutable
yarn add saga
yarn add redux
yarn add react-redux
yarn add redux-thunk
```

---
### 思考
1. shoppingCart 和 CheckoutBar共用{totalPrice}，分属两页
    + 如何抽象为common组件？
    + 在页面切换不重复渲染？
    
2. useState ，使用set时不能改变初始数据的数据类型
3. 关于react-redux hooks API   
   + useSelector() 在父组件还是子组件使用？   
   **影响因素**： 每次dispatch，会进行深比较(不同于connect)，{是否相同 ? re-render : no-re-render}
   re-render what? useSelector所在组件吗？ @TODO need to be tested
   
   + reselect库 结合 useSelector
   
   + connect 与 useSelector 二者 'comparison' 的理解
   
   + immutable.js 解决了什么问题？
   
---
### js基础
1. fun.call() .apply() .bind()
> call apply 自动完成参数绑定(包括this, params) + 调用()
  
fun.call(this, param1, param2, param3 , ...)  
fun.apply(this, \[param1, param2, param3, ...\])

fun.bind()比较特殊 **只管参数绑定，如需调用在其后加()**  
调用后 返回一个函数
method1: fun.bind(this, param1, param2 , ...)    
method2: fun.bind(this, \[param1, param2, ...\])  
  