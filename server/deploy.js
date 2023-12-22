const copyNodeModules = require('copy-node-modules')
const srcDir = './'
const dstDir = '../dist/server/'

copyNodeModules(srcDir, dstDir, { devDependencies: false }, (err, results) => {
  if (err) {
    console.error(err)
    return
  }
  Object.keys(results).forEach((name) => {
    const version = results[name]
    console.log(`Package name: ${name}, version: ${version}`)
  })
})
