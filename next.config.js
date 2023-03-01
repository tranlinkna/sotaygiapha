module.exports = {
  assetPrefix: './',
  images: {
    domains: ['loremflickr.com'],
  },
  experimental: { optimizeCss: false },
  env: {
    API_URL: process.env.API_URL,
    ENABLE_HUBSPOT: process.env.ENABLE_HUBSPOT,
    LIVE_CHAT_SCRIPT_URL: process.env.LIVE_CHAT_SCRIPT_URL,
    PORTAL_ID: process.env.PORTAL_ID,
    REGISTER_FORM_ID: process.env.REGISTER_FORM_ID,
    SUPPORT_FORM_ID: process.env.SUPPORT_FORM_ID,
    FORM_HUBSPOT_REGION: process.env.FORM_HUBSPOT_REGION,
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: process.env.ROBOTS_DESTINATION,
      },
      {
        source: '/.well-known/:path*',
        destination: process.env.WELL_KNOWN_DESTINATION + '/:path*',
      },
      {
        source: '/my-cards',
        destination: '/',
      },
      {
        source: '/chatbot/cardbot',
        destination: '/',
      },
      {
        source: '/chatbot/transactionsbot',
        destination: '/',
      },
    ];
  },
};
