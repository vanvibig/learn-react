interface ImportMetaEnv {
  // import.meta.env.PUBLIC_FOO
  readonly VITE_BD_ENV_NAME: string;
  readonly VITE_BD_API_HOST: string;
  readonly VITE_BD_USE_API_MOCK: string;
  readonly VITE_BD_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
