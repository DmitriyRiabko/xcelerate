/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output:'export',
    basePath:'/xcelerate',

    assetPrefix: isProd ? 'http://dmitriyriabko.github.io/xcelerate/' : undefined,
    
};

export default nextConfig;
