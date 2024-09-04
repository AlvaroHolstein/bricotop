import fs from 'fs/promises'

export async function getMainAssestsFilesFromDist(pathToAssets) {
const assetsFiles = await fs.readdir(pathToAssets)
  return {
    js: assetsFiles.find((file) => file.match(new RegExp(/index.*\.js/))),
    css: assetsFiles.find((file) => file.match(new RegExp(/index.*\.css/)))
  }
}
