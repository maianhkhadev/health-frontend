import React from 'react'
import Layout from '../../layouts/Default'
import SectionPieChart from '../../components/PageDashboard/SectionPieChart'
import SectionLineChart from '../../components/PageDashboard/SectionLineChart'
import SectionMeals from '../../components/PageDashboard/SectionMeals'
import { SectionHero } from './styles'

const Dashboard: React.FC = () => (
  <Layout
    extraSection={
      <SectionHero>
        <SectionPieChart />

        <SectionLineChart />
      </SectionHero>
    }
  >
    <SectionMeals />
  </Layout>
)

export default Dashboard
