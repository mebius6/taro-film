import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './tvSeries.less'

export default class TvSeries extends Component {
  config = {
    navigationBarTitleText: '连续剧'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>连续剧</Text>
      </View>
    )
  }
}
