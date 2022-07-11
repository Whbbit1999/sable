# sable

近日来，总觉所学甚少，所知甚少。写这项目，一来是验证和学习新的知识，二来是对自己内心的一次探寻。

> 后台管理系统

这是一套完备的后台管理系统，使用技术：

- UI 组件库：Navie UI
- http 请求：axios
- 路由切换： Vue Router
- 全局状态管理： Pinia
- css ： `unocss` & `scss`
- 等

## 自动注册路由

> 当前 layout 文件夹中只支持根目录下的.vue 组件，文件夹暂不支持

在.env 文件中配置 AUTOLOAD 属性为 true 时，会根据目录自动生成和加载组件。当然，您也可以在组件中自定义自动加载时组件的路由信息

自动加载时，需要在 layout 文件夹中有对应的 layout 组件（文件）。  
views 文件夹中的文件名和 layout 文件夹中的 layout 组件必须一一对应

```js
<script lang="ts">
export default {
  route: {
    name: "user",
    path: "/user",
  },
};
</script>
```
