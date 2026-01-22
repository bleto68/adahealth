/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BLOCKFROST_PROJECT_ID: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_CARDANO_NETWORK: string;
  readonly VITE_CACHE_TTL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}