import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vinext()],
  ssr: {
    external: ['semver', 'pg', 'pg-native', 'bcrypt'],
    noExternal: [],
  },
});
