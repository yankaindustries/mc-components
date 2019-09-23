import fs from 'fs'
import path from 'path'
import process from 'process'
import { camelCase, upperFirst } from 'lodash'


const src = path.resolve('./src/assets/icons')
const dest = path.resolve('./src/components/Icons/icons.js')
const files = fs.readdirSync(src)

const icons = files
  .filter((file) => {
    if (/^\./.test(file)) return false
    return true
  })
  .map((file) => {
    if(! /^\..*/.test(file)) {
      const key = file.replace('.svg', '')
      const path = upperFirst(camelCase(key))
      const component = upperFirst(camelCase(`svg-${key}`))

      return {
        key,
        path,
        component,
      }
    }
  })

const header = '/* eslint-disable quote-props */'

const imports = icons.map(({ component, path }) => {
  return `import ${component} from './${path}'\n`
}).join('')

let map = 'export const ICONS = {\n'
map += icons.map(({ key, component }) => {
  return `  '${key}': ${component},\n`
}).join('')
map += '}'

const content = `${header}\n${imports}\n${map}\n`

fs.writeFileSync(dest, content)
