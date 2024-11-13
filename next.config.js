/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    basePath: isProd ? '/kis_project_DANDA' : '',
    output: 'export',
    distDir: 'dist',
    images:{
        unoptimized: true,
    },
    
  }
   
  module.exports = nextConfig
