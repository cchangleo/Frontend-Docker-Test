import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Tab, TabItem } from '../styles/tab'

const tabItems = [
  {
    label: 'Overview',
    value: '/overview'
  },
  {
    label: 'Information',
    value: '/info'
  }
]

class Tabs extends React.Component<any, any>{

  onClick = (activeTab: string) => {
    this.props.history.push(activeTab)
  }

  render() {
    return <Tab>
      {
        tabItems.map((item, i)=><TabItem
          onClick={()=>this.onClick(item.value)}
          key={i}>
          {item.label}
        </TabItem>)
      }
    </Tab>
  }
}

export default withRouter(Tabs)
