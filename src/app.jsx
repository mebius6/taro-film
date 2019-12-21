import Taro, { Component } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import Index from './pages/index'
import './app.less'
import api from './api'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      'pages/home/home',
      'pages/tvSeries/tvSeries',
      'pages/film/film',
      'pages/variety/variety',
      'pages/anime/anime'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '免费看视频',
      navigationBarTextStyle: 'black'
    },

    tabBar: {
      color: '#666',
      selectedColor: '#b4282d',
      backgroundColor: '#fafafa',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/home/home',
          iconPath: './assets/tab-bar/home.svg',
          selectedIconPath: './assets/tab-bar/home-active.svg',
          text: '首页'
        },
        {
          pagePath: 'pages/tvSeries/tvSeries',
          iconPath: './assets/tab-bar/tvSeries.svg',
          selectedIconPath: './assets/tab-bar/tvSeries-active.svg',
          text: '连续剧'
        },
        {
          pagePath: 'pages/film/film',
          iconPath: './assets/tab-bar/film.svg',
          selectedIconPath: './assets/tab-bar/film-active.svg',
          text: '电影'
        },
        {
          pagePath: 'pages/variety/variety',
          iconPath: './assets/tab-bar/variety.svg',
          selectedIconPath: './assets/tab-bar/variety-active.svg',
          text: '综艺'
        },
        {
          pagePath: 'pages/anime/anime',
          iconPath: './assets/tab-bar/anime.svg',
          selectedIconPath: './assets/tab-bar/anime-active.svg',
          text: '动画'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {
    api.getList().then(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
