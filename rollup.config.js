const path = require('path')
const ts = require('rollup-plugin-typescript2');
const nodeResolve = require('@rollup/plugin-node-resolve');
const serve = require('rollup-plugin-serve');
const { babel } = require('@rollup/plugin-babel');
const pkg = require('./package.json');
const commonjs = require('@rollup/plugin-commonjs')
let esbuild = require('rollup-plugin-esbuild')
esbuild = esbuild.default ?? esbuild;

const banner = '//  Ramda v' + pkg.version + '\n'
    + '//  https://github.com/ramda/ramda\n'
    + '//  (c) 2023-' + new Date().getFullYear() + ' Bryan Hui\n'
    + '//  Ramda may be freely distributed under the MIT license.\n';

const config = {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, 'dist/bundle.js'),
        format: 'umd',
        // name: 'L',
        // exports: 'named',
        banner: banner
        // global: 弄个全局变量来接收
        // cjs: module.exports
        // esm: export default
        // iife: ()()
        // umd: 兼容 amd + commonjs 不支持es6导入
        // dir: path.resolve(__dirname, 'dist')
        // dir: 'dist',
        // sourcemap: true,
        // format: 'umd',
        // name: 'R',
        // exports: 'named',

    },

    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
        }),
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        esbuild({
            // targets: 'es2015',
            tsconfig: 'tsconfig.json'
        }),
        ts({
            tsconfig: 'tsconfig.json'//path.resolve(__dirname, 'tsconfig.json')
        }),
        serve({
            port: 3000,
            contentBase: '', // 表示起的服务是在根目录下
            openPage: '/public/index.html', // 打开的是哪个文件
            open: false // 默认打开浏览器
        }),
        commonjs(),
    ],

}

module.exports = config

// 'use strict';

// const { babel } = require('@rollup/plugin-babel');
// // uglify handles only es5 code, so this also acts as smoke test against shipping es2015+ syntax
// const { uglify } = require('rollup-plugin-uglify');
// const pkg = require('./package.json');

// const banner = '//  Ramda v' + pkg.version + '\n'
//     + '//  https://github.com/ramda/ramda\n'
//     + '//  (c) 2013-' + new Date().getFullYear() + ' Scott Sauyet, Michael Hurley, and David Chambers\n'
//     + '//  Ramda may be freely distributed under the MIT license.\n';

// const input = 'src/index.js';

// const config = {
//     input: input,
//     output: {
//         format: 'umd',
//         name: 'R',
//         exports: 'named',
//         banner: banner
//     },
//     plugins: [
//         babel({
//             babelHelpers: 'bundled',
//             presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
//         })
//     ]
// };

// if (process.env.NODE_ENV === 'production') {
//     config.plugins.push(
//         uglify({
//             compress: {
//                 pure_getters: true,
//                 unsafe: true,
//                 unsafe_comps: true,
//             },
//             warnings: false
//         })
//     );
// }

// module.exports = config;


// const typescript = require("@rollup/plugin-typescript");
// const resolve = require("@rollup/plugin-node-resolve");
// const { readFileSync } = require("fs");
// const { terser } = require("rollup-plugin-terser");
// const alias = require("@rollup/plugin-alias");
// const packageJson = JSON.parse(readFileSync("./package.json", "utf8")); // 读取UMD全局模块名，在package中定义了
// const pkgName = packageJson.umdModuleName;

// const config = {
//     input: "src/index.ts",
//     output: [
//         {
//             file: "dist/esm/index.js",
//             format: "esm",
//         },
//         {
//             file: "dist/cjs/index.js",
//             format: "cjs",
//         },
//         {
//             file: "dist/umd/index.js",
//             format: "umd",
//             name: pkgName,
//             globals: {
//                 // 配置依赖中的UMD全局变量名
//                 "event-message-center": "MessageCenter",
//                 "task-queue-lib": "TaskQueue",
//             },
//         },
//         {
//             file: "dist/bundle/index.js",
//             format: "iife",
//             name: pkgName,
//             plugins: [terser()],
//         },
//     ],
//     plugins: [
//         typescript({
//             tsconfig: "./tsconfig.json",
//         }),
//         alias({
//             resolve: [".js"],
//         }),
//         resolve(),
//     ],
// };

// module.exports = config

// 'use strict';

// const { babel } = require('@rollup/plugin-babel');
// // uglify handles only es5 code, so this also acts as smoke test against shipping es2015+ syntax
// const { uglify } = require('rollup-plugin-uglify');
// const pkg = require('./package.json');
// const path = require('path')
// const commonjs = require('@rollup/plugin-commonjs')

// const banner = '//  bhlodash v' + pkg.version + '\n'
//     + '//  https://github.com/ramda/ramda\n'
//     + '//  (c) 2023-' + new Date().getFullYear() + ' Bryan Hui\n'
//     + '//  Ramda may be freely distributed under the MIT license.\n';

// const input = 'src/index.js';

// const config = {
//     input: input,
//     output: {
//         // dir: path.resolve(__dirname, 'dist'),
//         // file: path.resolve(__dirname, 'dist/bundle.js'),
//         format: 'umd',
//         name: 'L',
//         exports: 'named',
//         banner: banner
//     },
//     plugins: [
//         babel({
//             babelHelpers: 'bundled',
//             presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
//         }),
//         commonjs()
//     ]
// };

// if (process.env.NODE_ENV === 'production') {
//     config.plugins.push(
//         uglify({
//             compress: {
//                 pure_getters: true,
//                 unsafe: true,
//                 unsafe_comps: true,
//             },
//             warnings: false
//         })
//     );
// }

// module.exports = config;
