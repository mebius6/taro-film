import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './home.less'

export default class Home extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props) {
    super(props)
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='home'>
        <Text>首页</Text>
      </View>
    )
  }
}
