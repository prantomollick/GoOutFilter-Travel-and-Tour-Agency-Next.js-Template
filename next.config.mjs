/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      //base redirect
      {
        source: "/",
        destination: "/home",
        permanent: true
      }
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagsapi.com"
      }
    ]
  }
};

export default nextConfig;
