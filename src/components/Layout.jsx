import { NavBar } from './Navbar'

export const Layout = ({ children }) => {
  const containerStyle = {
    width: '90%',
    margin: '100px auto'
  }
  return (
    <div>
      <NavBar />
      <div style={containerStyle}>{children}</div>
    </div>
  )
}
