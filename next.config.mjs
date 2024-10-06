/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'bn.ebdresults.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
