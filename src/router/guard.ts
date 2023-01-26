import { menuStore } from '@/store/menuStore'
import { storage } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

// 路由守卫
class Guard {
  constructor(private router: Router) {}

  // 启动路由守卫
  public run() {
    console.log('guard is running')

    this.router.beforeEach((to, from) => {
      console.log(to, from)
      const token = storage.get('token')

      // 对需要登录的路由进行拦截
      if (this.isLogin(to, token) === false) {
        return { name: 'login' }
      }

      // 对已经登录的用户限制不能访问游客可以访问的路径——登录等页面
      if (this.isGuest(to, token) === false) {
        return from
      }

      // TODO: 对用户权限进行限制

      // 增加历史菜单
      menuStore().addHistoryMenu(to)
    })
  }

  private isLogin(route: RouteLocationNormalized, token: any): boolean {
    return Boolean(!route.meta?.auth || (route.meta.auth && token))
  }

  private isGuest(route: RouteLocationNormalized, token: any): boolean {
    return Boolean(!route.meta?.guest || (route.meta.guest && !token))
  }
}
export default (router: Router) => {
  new Guard(router).run()
}
