// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/me/' : ''
}

module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
            use: [
            ],
        })


        return config
    },
}
