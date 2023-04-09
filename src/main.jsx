import '../style.css'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Index } from './pages'
import { Create } from './pages/Create'
import { View } from './pages/View'
import { Store } from './store/store'
const root = createRoot(document.getElementById('app'))

root.render(

  <Store>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/create' element={<Create />} />
        <Route path='/view/:bookId' element={<View />} />
      </Routes>
    </BrowserRouter>
  </Store>

)
