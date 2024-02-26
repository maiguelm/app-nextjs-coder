/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns:[
		{
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/**',
          },
	], 
		domains: ['i.postimg.cc', 'gs://lemonies-f40a0.appspot.com']
}}


module.exports = nextConfig
