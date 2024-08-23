type Theme = ''
type Position = 'left' | 'right' | 'top'

interface SiteConfig {
  title: string
  theme: Theme
  asidePosition: Position
}

export type { SiteConfig }
