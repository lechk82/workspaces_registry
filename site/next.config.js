/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Lechs Kasm workspaces',
    description: 'Lechs store for Kasm supported workspaces.',
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
