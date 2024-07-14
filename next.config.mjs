/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/assets/",
            publicPath: "/_next/static/assets/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
