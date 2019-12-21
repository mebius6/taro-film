import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './variety.less'

export default class Variety extends Component {
  config = {
    navigationBarTitleText: '综艺'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>综艺</Text>
      </View>
    )
  }
}
