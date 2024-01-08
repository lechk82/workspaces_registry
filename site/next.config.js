/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Lechs Kasm worspaces',
    description: 'Lechs Kasm worspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://lechk82.github.io/workspaces_registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
