import type { RouteLocationNormalized, Router } from 'vue-router'
import { storage } from '@/utils'

// 路由守卫
class Guard {
  constructor(private router: Router) {}

  // 启动路由守卫
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  // 是否登录可访问
  private isLogin(route: RouteLocationNormalized): boolean {
    return Boolean(!route.meta?.auth || (route.meta.auth && this.token()))
  }

  // 是否游客可访问
  private isGuest(route: RouteLocationNormalized): boolean {
    return Boolean(!route.meta?.guest || (route.meta.guest && !this.token()))
  }

  private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (this.isLogin(to) === false)
      return { name: RouteNameEnum.LOGIN }

    if (this.isGuest(to) === false)
      return from
  }

  private token() {
    return storage.get('token')
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
