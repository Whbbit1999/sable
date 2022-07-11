interface ViteEnv {
  VITE_ROUTE_AUTOLOAD: boolean;
  VITE_BASE_URL: string;
}

interface ImportMetaEnv extends ViteEnv {
  readonly VITE_APP_TITLE: string;
}
