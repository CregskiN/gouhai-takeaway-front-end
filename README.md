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
+ shoppingCart 和 CheckoutBar共用{totalPrice}，分属两页，
    + 如何抽象为common组件？
    + 在页面切换不重复渲染？