import { useState } from 'react'
import { useAppContext } from '../store/store'
import { Layout } from '../components/Layout'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [cover, setCover] = useState('')
  const [intro, setIntro] = useState('')
  const [completed, setCompleted] = useState(false)
  const [review, setReview] = useState('')

  const store = useAppContext()
  const navigate = useNavigate()

  // Styles Form

  const InputStyles = {
    fromContainer: {
      width: '400px',
      margin: '0 auto'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      margin: '15px 0'
    },
    title: {
      fontSize: '16px',
      textAlign: 'left',
      color: 'white'
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      fontSize: '16px'
    }
  }

  const buttonStyle = {
    padding: '15px 20px',
    minWidht: '200px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#1e9638',
    color: 'white',
    fontWeigth: 'bolder',
    fontSize: '18px'
  }

  function handleChange (e) {
    const name = e.target.name
    const value = e.target.value

    if (name === 'title')setTitle(value)

    if (name === 'author')setAuthor(value)

    if (name === 'intro')setIntro(value)

    if (name === 'completed')setCompleted(e.target.checked)

    if (name === 'review')setReview(value)
  }

  function handleChangeFile (e) {
    const element = e.target
    const file = element.files[0]
    const reader = new window.FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = function () {
      setCover(reader.result.toString())
    }
  }

  function handleSubmit (e) {
    e.preventDefault()

    const newBook = {
      id: window.crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review

    }

    // TODO mandar a registrar libro

    store.createItem(newBook)
    navigate('/')
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit} style={InputStyles.fromContainer}>

        <div style={InputStyles.container}>
          <div style={InputStyles.title}>Title</div>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            value={title}
            style={InputStyles.input}
          />
        </div>

        <div style={InputStyles.container}>
          <div style={InputStyles.title}>Author</div>
          <input
            type='text'
            name='author'
            onChange={handleChange}
            value={author}
            style={InputStyles.input}
          />
        </div>

        <div style={InputStyles.container}>
          <div style={InputStyles.title}>Cover</div>
          <input
            type='file'
            name='cover'
            onChange={handleChangeFile}
            style={InputStyles.input}
          />
          <div>
            {cover ? <img src={cover} width='200' alt='preview' /> : ''}
          </div>
        </div>

        <div style={InputStyles.container}>
          <div style={InputStyles.title}>Introduction</div>
          <input
            type='text'
            name='intro'
            onChange={handleChange}
            value={intro}
            style={InputStyles.input}
          />
        </div>

        <div>
          <div style={InputStyles.title}>Completed</div>
          <input
            type='checkbox'
            name='completed'
            onChange={handleChange}
            value={completed}
          />
        </div>

        <div style={InputStyles.container}>
          <div style={InputStyles.title}>Review</div>
          <input
            type='text'
            name='review'
            onChange={handleChange}
            value={review}
            style={InputStyles.input}
          />
        </div>

        <input style={buttonStyle} type='submit' value='Register Book' />
      </form>

    </Layout>
  )
}
