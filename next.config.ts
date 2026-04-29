import type { NextConfig } from "next";

// 公開先パスは .env.production の NEXT_PUBLIC_BASE_PATH で管理する
// 独自ドメイン yorihub.jp (デフォルト): NEXT_PUBLIC_BASE_PATH= (空) → npm run deploy:prepare
// GitHub Pages プレビュー用:           npm run deploy:gh-preview (env を上書きして build)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
