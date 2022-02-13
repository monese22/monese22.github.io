// /** @type {import('next').NextConfig} */
// module.exports = {
//   eslint: {
//     dirs: ['src'],
//   },

//   reactStrictMode: true,

//   // Uncoment to add domain whitelist
//   // images: {
//   //   domains: [
//   //     'res.cloudinary.com',
//   //   ],
//   // },
// };


module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  // basePath: '/monese.github.io',
  // assetPrefix: '/monese.github.io/',
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en',
  //       permanent: true,
  //     },
  //   ]
  // },
}