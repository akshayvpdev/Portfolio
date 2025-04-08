/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
      // Only run ESLint on specific directories
      dirs: ['pages', 'components']
    }
  };
  
  module.exports = nextConfig;