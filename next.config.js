/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://squid-app-j9w5v.ondigitalocean.app/api' // production api
    }
}

module.exports = nextConfig
