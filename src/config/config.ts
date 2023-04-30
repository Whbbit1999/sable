export default {
  menu: {
    showChildrenRouteIcon: true, // 是否显示子路由图标
    defaultRouteIcon: 'ion:book', // 子路由默认图标
  },
  historyMenuMax: 10, // 历史菜单最大显示数量
  layout: {
    showFooter: true, // 显示网页底部
    showBreadCrump: true, // 显示面包屑导航
  },
  routes: {
    home: { path: '/', redirect: '/disboard/home' }, // 默认首页
  },
  naiveUI: {
    notificationMax: 3,
  },
}
