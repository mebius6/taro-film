// NOTE H5 端使用 devServer 实现跨域，需要修改 package.json 的运行命令，加入环境变量

const HOST = '"106.54.126.67'

// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: HOST,
    HOST_M: HOST
  },
  weapp: {},
  h5: {}
}
