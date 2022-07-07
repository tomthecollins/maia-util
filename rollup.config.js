// import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './es6/maia-util.js',
  output: {
    file: './maia-util.js',
    format: 'iife',
    name:'mu'
  }
  // ,plugins :[ commonjs() ]
}
