import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 访问权限
    auth?: boolean // 登录用户可访问
    guest?: boolean // 游客可访问
  }
}
