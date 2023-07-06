import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}

interface IState {
  count: number
}

class Demo extends PureComponent<IProps, IState> {
  // state 可以写在 constructor 外面 / 成员变量
  state = {
    count: 1
  }

  // 默认 super(props)
  // constructor(props: IProps) {
  //   super(props)

  //   this.state = {
  //     count: 0
  //   }
  // }

  render(): React.ReactNode {
    return (
      <>
        <div>Demo</div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>数量：{this.state.count}</div>
      </>
    )
  }
}

export default Demo
