/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack(config, { isServer }) {
    // Resolve the directory path based on whether it's server or client-side
    const directoryPath = isServer ? process.cwd() : path.resolve('./');

    config.resolve.alias['@'] = path.resolve(directoryPath, 'app');
    return config;
  },
  // Add any other Next.js configuration options here if needed
};

export default nextConfig;
