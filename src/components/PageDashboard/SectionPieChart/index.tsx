import React from 'react'
import { Section } from './styles'
import { Progress } from 'antd'
import { Content } from './styles'

const SectionPieChart: React.FC = () => (
  <Section>
    <Progress
      type="circle"
      strokeColor="#ffffff"
      strokeWidth={2}
      size={180}
      percent={75}
      format={(percent) => <Content><small>05/21</small> {percent} %</Content>}
    />
  </Section>
)

export default SectionPieChart
