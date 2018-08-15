import path from 'path'
import svgr from '@svgr/rollup'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'


const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-slick': 'Slider',
  'prop-types': 'PropTypes',
  'lodash': 'lodash',
  'classnames': 'cn',
}


export default {
  input: path.resolve(__dirname, './src/index.js'),

  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      globals,
    }
  ],

  external: Object.keys(globals),

  plugins: [
    svgr({
      icon: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    terser(),
  ]
}
