/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "rc-util",
    // "@babel/runtime", -- jika mau membuat login dengan next-auth mohon untuk di comment (mang anjir dari siang sampe sore error gara2 ini)
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
  ],
};

module.exports = nextConfig;
