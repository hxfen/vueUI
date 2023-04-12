# 快速开始

#### 安装组件库
```bash
npm i vue-ui-template
```

#### 引用组件库
>在main.js中引入组件库
```javascript
// 全部引入
import 'vue-ui-template/dist/css/index.css';
import MUI from 'vue-ui-template';
Vue.use(MUI)

// 按需引入
import 'vue-ui-template/dist/css/index.css';
import { Demo } from 'vue-ui-template';
Vue.use(Demo)
```
