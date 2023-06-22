import React from 'react'
import Layout from '../../layouts/Default'
import SectionNav from '../../components/PageRecord/SectionNav'
import SectionBodyRecord from '../../components/PageRecord/SectionBodyRecord'
import SectionExercise from '../../components/PageRecord/SectionExercise'
import SectionDiary from '../../components/PageRecord/SectionDiary'

const Record: React.FC = () => (
  <Layout>
    <SectionNav />

    <SectionBodyRecord />

    <SectionExercise />

    <SectionDiary />
  </Layout>
)

export default Record
