/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        // Define the route or routes for which you want to apply these headers
        source: '/public/(.*)',
        headers: [
          {
            // Allow loading resources from googleusercontent.com
            key: 'Access-Control-Allow-Origin',
            value: 'https://googleusercontent.com',
          },
        ],
      },
    ]
  },
}

export default config
