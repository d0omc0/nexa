/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "framerusercontent.com"
            },
            {
                hostname: "creazilla-store.fra1.digitaloceanspaces.com"
            },
        ]
    }
};

export default nextConfig;
