// loading page config
const loading = {
  // https://icones.js.org/collection/svg-spinners
  title: 'Sable Admin',
  content: '一阴一阳谓之道',
}

const watermark = {
  show: false,
  fontSize: 16,
  lineHeight: 16,
  width: 200,
  height: 200,
  xOffset: 0,
  yOffset: 30,
  rotate: -20,
  content: 'SableAdmin',
}

const naiveUI = {
  notificationMax: 3,
}

const site = {
  title: 'SableAdmin',
}
export default {
  site,
  menu: {
    showChildrenRouteIcon: false, // 是否显示子路由图标
    defaultRouteIcon: 'carbon:align-box-bottom-center', // 子路由默认图标
  },
  historyMenuMax: 10, // 历史菜单最大显示数量
  layout: {
    showFooter: true, // 显示网页底部
    showBreadCrump: true, // 显示面包屑导航
    aside: {
      'trigger': 'arrow-circle' as 'bar' | 'arrow-circle', // bar | arrow-circle
      'native-scrollbar': false, // 是否使用系统滚动条
    },
  },
  routes: {
    home: { path: '/', redirect: '/dashboard/workplace' }, // 默认首页
  },
  naiveUI,
  watermark,
  loading,
}
