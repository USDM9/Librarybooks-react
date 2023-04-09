import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAppContext } from '../store/store'

export const View = () => {
  const [item, setItems] = useState(null)
  const params = useParams()
  const store = useAppContext()

  useEffect(() => {
    const book = store.getItem(params.bookId)
    setItems(book)
  }, [])

  const itemStyle = {
    container: {
      display: 'flex',
      gap: '20px',
      color: 'white',
      width: '800px',
      margin: '0 auto'
    }
  }

  if (!item) return <Layout>Not Found Book</Layout>

  return (
    <Layout>
      <div style={itemStyle.container}>
        <div>
          <div>{item?.cover ? <img src={item?.cover} width='400' /> : ''}</div>
        </div>
        <div>
          <h2>{item?.title}</h2>
          <div>{item?.author}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? 'Leido' : 'Por terminar'}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  )
}
