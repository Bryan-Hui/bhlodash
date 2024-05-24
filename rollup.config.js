const path = require('path')
const ts = require('rollup-plugin-typescript2');
const nodeResolve = require('@rollup/plugin-node-resolve');
const serve = require('rollup-plugin-serve');
var pkg = require('./package.json');

var banner = '//  Ramda v' + pkg.version + '\n'
    + '//  https://github.com/ramda/ramda\n'
    + '//  (c) 2023-' + new Date().getFullYear() + ' Bryan Hui\n'
    + '//  Ramda may be freely distributed under the MIT license.\n';

const config = {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, 'dist/bundle.js'),
        // global: 弄个全局变量来接收
        // cjs: module.exports
        // esm: export default
        // iife: ()()
        // umd: 兼容 amd + commonjs 不支持es6导入
        format: 'es',
        sourcemap: true,
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        serve({
            port: 3000,
            contentBase: '', // 表示起的服务是在根目录下
            openPage: '/public/index.html', // 打开的是哪个文件
            open: true // 默认打开浏览器
        })
    ],

}

module.exports = config