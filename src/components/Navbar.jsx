import { Link } from 'react-router-dom'

export const NavBar = () => {
  const linkStyles = {
    padding: '10px',
    display: 'block',
    fontSize: '18px',
    color: 'white',
    textDecoration: 'none'
  }

  const navContainerStyles = {
    backgroundColor: '#181d27',
    padding: '10px',
    display: 'flex',
    gap: '5px',
    justifyContent: 'center'
  }

  return (
    <div style={navContainerStyles}>
      <Link to='/' style={linkStyles}>Home</Link>
      <Link to='/create' style={linkStyles}>Create</Link>
    </div>
  )
}
