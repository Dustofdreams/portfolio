/**
 * @type {import('next').NextConfig}
 */

const { env } = require('process');

const isProd = process.env.NODE_ENV === "developlmet";

const nextConfig = {
    basePath: '/portfolio',
    output: 'export',
    distDir: 'dist',
    env: {
        PUBLIC_URL: '.'
    }
  }
   
  module.exports = nextConfig