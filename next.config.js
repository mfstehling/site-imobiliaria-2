module.exports = {
  reactStrictMode: true,
  swcMinify: true,
}
const withImages = require('next-images')

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
})
