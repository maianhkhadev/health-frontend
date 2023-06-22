import React from 'react'
import ItemNav from './ItemNav'
import { Section, Main } from './styles'

const dataSource = [
  {
    id: 1,
    image: '/images/MyRecommend-1.jpg',
    title: 'Body Record',
    text: '自分のカラダの記録'
  },
  {
    id: 2,
    image: '/images/MyRecommend-2.jpg',
    title: 'My Exercise',
    text: '自分の運動の記録'
  },
  {
    id: 3,
    image: '/images/MyRecommend-3.jpg',
    title: 'My Diary',
    text: '自分の日記'
  }
]

const SectionNav: React.FC = () => (
  <Section>
    <Main>
      {dataSource.map((item) => (
        <ItemNav key={item.id} data={item} />
      ))}
    </Main>
  </Section>
)

export default SectionNav
