import { h } from 'vue'
import { RouterLink } from 'vue-router'

export function renderLink(routerName: string, routerTitle: string) {
  return () =>
    h(
      RouterLink,
      {
        to: {
          name: routerName,
        },
      },
      { default: () => routerTitle },
    )
}
