import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './film.less'

export default class Film extends Component {
  config = {
    navigationBarTitleText: '电影'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>电影</Text>
      </View>
    )
  }
}
