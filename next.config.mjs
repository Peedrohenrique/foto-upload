/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'foto-upload.s3.us-east-2.amazonaws.com',
            }
        ]
    }
};

export default nextConfig;
