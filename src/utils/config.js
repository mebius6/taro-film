// 发布版本
const version = '1.0.0'
// 发布日期
const bundleVersion = '20191101'

// 白名单【非网关】
const whitelist = [
  // { name: 'commonUpload', path: 'fileUpload/upload' }
]

// 服务接口地址
const services = {
  commonBase: {
    url: 'http://106.54.126.67',
    port: 5000
  }
}

export default {
  bundleVersion: bundleVersion,
  version: version,
  apiUrl: 'http://106.54.126.67',
  apiBaseUrl: '',
  apiConfig: services,
  whitelist
}
