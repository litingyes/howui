const { resolve } = require('node:path')
const { copySync, emptyDirSync } = require('fs-extra')

const distPath = resolve(__dirname, '../dist')
const srcPath = resolve(__dirname, '../src')

function build() {
  emptyDirSync(distPath)
  copySync(srcPath, distPath)
}

build()
