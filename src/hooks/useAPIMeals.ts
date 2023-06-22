import { useState } from 'react'
import dataSource from '../mockData/meals'

type IMeal = {
  id: number
  type: string
  image: string
  date: string
}

const useAPIMeals = () => {
  const [data, setData] = useState<IMeal[]>([])

  const refetch = (type?: string) => {
    if (type) {
      const newData = dataSource.filter((item) => {
        return item.type === type
      })

      setData(newData)
    } else {
      setData(dataSource)
    }
  }

  return {
    data,
    refetch,
  }
}

export default useAPIMeals
