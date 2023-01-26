import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 访问权限
    auth?: boolean // 登录用户可访问
    guest?: boolean // 游客可访问

    permissions: string[] // 可访问权限
    // 和菜单相关
    menu?: {
      title: string // 页面标题
      show?: boolean // 是否在菜单中显示 为false或不设置不在菜单中显示
      key?: string // 菜单唯一标识
      order?: number // 菜单排序

      keepAlive?: boolean // 是否可以缓存
      showTag?: boolean // 是否在历史菜单中显示
    }
  }
}
