import { useAppContext } from '../store/store'
import { Layout } from '../components/Layout'
import { Books } from '../components/Books'

export const Index = () => {
  const store = useAppContext()

  const booksContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 50
  }
  return (
    <Layout>
      <div style={booksContainer}>
        {store.items.map(
          item => <Books key={item.id} item={item} />)}
      </div>
    </Layout>
  )
}
