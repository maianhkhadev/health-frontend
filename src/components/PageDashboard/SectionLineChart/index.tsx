import React from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Section, Main } from './styles'
import dataSource from '../../../mockData/records'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const colors = {
  background: 'rgba(0, 0, 0, 1)',
  axis: 'rgba(255, 255, 255, 0.6)',
  dataset: 'rgba(0, 123, 255, 1)',
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: colors.axis,
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    title: {
      display: false,
    },
  },
}

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
]

const data = {
  labels,
  datasets: [
    {
      data: dataSource[0].data,
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
    {
      data: dataSource[1].data,
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
  ],
}

const SectionLineChart: React.FC = () => (
  <Section>
    <Main>
      <Line options={options} data={data} />
    </Main>
  </Section>
)

export default SectionLineChart
