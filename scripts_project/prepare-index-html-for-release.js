import path from 'path'
import fs from 'fs/promises'
import { getMainAssestsFilesFromDist } from './utils.js'
;(async () => {
  const pathToIndexHtml = path.join('.', '/dist/index.html')
  const pathToAssets = path.join('.', '/dist/assets/')

  const mainAssetsFiles = await getMainAssestsFilesFromDist(pathToAssets)

  const indexHtmlFile = await fs.readFile(pathToIndexHtml, 'utf-8')
  const jsFile = await fs.readFile(path.join(pathToAssets, mainAssetsFiles.js), 'utf-8')
  const cssFile = await fs.readFile(path.join(pathToAssets, mainAssetsFiles.css), 'utf-8')

  // For this i need to remove the /export{.*}/ from the end of the JS file!
  const readyForProdJsFile = `<script>${jsFile.substring(0, jsFile.lastIndexOf('export'))}</script>`
  const readyForProdCssFile = `<style>${cssFile}</style>`
  const readyForProductionIndexHtml = indexHtmlFile
    .split('\n')
    .filter((line) => !line.includes(mainAssetsFiles.js) && !line.includes(mainAssetsFiles.css))
    .map((line) => {
      if (line.includes('</head>')) {
        console.log()
        return readyForProdCssFile + '\n' + line
      } else if (line.includes('</body>')) {
        return readyForProdJsFile + '\n' + line
      }
      return line
    })
    .join('\n')
  // console.log(readyForProductionIndexHtml)
  await fs.writeFile(pathToIndexHtml, readyForProductionIndexHtml)
})()
