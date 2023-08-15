/** @type {import('next').NextConfig} */
const nextConfig = {
    site: process.env.NEXTAUTH_URL || 'http://hasfiprimalogistik.com',
    trustProxy: true,
}

module.exports = nextConfig
