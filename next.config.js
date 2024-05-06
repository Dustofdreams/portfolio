/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "developlmet";

const nextConfig = {
    basePath: isProd? '/portfolio' : '',
    output: 'export',
    distDir: 'dist',
  }
   
  module.exports = nextConfig