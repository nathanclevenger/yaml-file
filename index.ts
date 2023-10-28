import yaml from 'js-yaml'
import { PathLike, promises } from 'node:fs'

export async function read (path: PathLike | promises.FileHandle, yamlOptions: yaml.LoadOptions = {}) {
  const data = await promises.readFile(path, 'utf8')
  return yaml.load(data, yamlOptions)
}

export async function write (path: PathLike | promises.FileHandle, data: unknown, yamlOptions: yaml.DumpOptions = {}) {
  const yamlData = yaml.dump(data, yamlOptions)
  return promises.writeFile(path, yamlData)
}

export default { read, write }