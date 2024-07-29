/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production'
 
module.exports = {
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
}

const nextConfig = {
    output:'export',
    basePath:'/xcelerate/',

}


export default nextConfig;
