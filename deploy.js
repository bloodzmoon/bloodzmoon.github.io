const ghpages = require('gh-pages')
const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.join(__dirname, './dist/.nojekyll'), '')

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    dotfiles: true,
    message: `🚀 Deploy [ ${new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })} ]`,
  },
  () => {
    console.log('Deploy to https://bloodzmoon.github.io !')
  }
)
