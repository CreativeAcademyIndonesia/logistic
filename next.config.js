/** @type {import('next').NextConfig} */
// const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             // matching all API routes
    //             source: "/api/:path*",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 { key: "Access-Control-Allow-Origin", value: "*" }, // Allow http origin
    //                 { key: "Access-Control-Allow-Methods", value: "GET, DELETE, PATCH, POST, PUT" },
    //                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    //             ]
    //         }
    //     ]
    // }
    
// }

// module.exports = nextConfig

module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://82.180.131.55:3000/:path*',
          },
        ]
      },
  };