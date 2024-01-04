/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `@import "./styles/components/_mantine.scss";`,
  },
};

export default nextConfig;
