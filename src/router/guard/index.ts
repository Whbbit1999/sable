import type { RouteLocationNormalized, Router } from 'vue-router'
import { storage } from '@/utils'

// 路由守卫
class Guard {
  constructor(private router: Router) {}

  // 启动路由守卫
  public run() {
    this.router.beforeEach((to, from) => {
      const token = storage.get('token')

      // 对需要登录的路由进行拦截
      if (this.isLogin(to, token) === false)
        return { name: RouteNameEnum.LOGIN }

      // 对已经登录的用户限制不能访问游客可以访问的路径——登录等页面
      if (this.isGuest(to, token) === false)
        return from

      // TODO: 对用户权限进行限制
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
