import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './anime.less'

export default class Anime extends Component {
  config = {
    navigationBarTitleText: '动画'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>动画</Text>
      </View>
    )
  }
}
