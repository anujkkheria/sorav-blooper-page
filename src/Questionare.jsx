import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Questionaire() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({ location: '', crush: '' })

  const correctAnswers = {
    location: [
      'prestige',
      'banglore',
      'vasu',
      'song of the south',
      'prestige song of the south',
    ],
    crush: ['karishma', 'ma', 'karimbai', 'karish', 'ka'],
  }

  const handleSubmit = (e) => {
    e.preventDefault() // prevents reload

    const loc = answers.location.trim().toLowerCase()
    const crush = answers.crush.trim().toLowerCase()

    if (
      correctAnswers.location.includes(loc) &&
      correctAnswers.crush.includes(crush)
    ) {
      navigate('/BirthdayBoy')
    } else {
      alert('❌ Thu Chutiya Hain')
    }
  }

  return (
    <div
      style={{
        background: 'white',
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#667eea',
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold',
        }}
      >
        🎊 Birthday Trivia Time! 🎊
      </h2>

      <p
        style={{
          fontSize: '1.1rem',
          color: '#666',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Think you know your friends well? Let's find out! 😏
      </p>

      <form onSubmit={handleSubmit}>
        {/* QUESTION 1 */}
        <div style={{ marginBottom: '40px' }}>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '1.4rem',
              color: '#333',
              marginBottom: '15px',
              fontWeight: 'bold',
            }}
          >
            <img
              src='https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf5c53d4d635dbb.gif'
              alt='Location'
              style={{ height: '5rem', width: '5rem' }}
            />
            1. 📍 Guess the location where this photo was taken:
          </label>

          <input
            type='text'
            value={answers.location}
            onChange={(e) =>
              setAnswers({ ...answers, location: e.target.value })
            }
            placeholder='Enter the location...'
            required
            style={{
              width: '100%',
              padding: '18px',
              fontSize: '1.1rem',
              border: '3px solid #667eea',
              borderRadius: '12px',
            }}
          />
        </div>

        {/* QUESTION 2 */}
        <div style={{ marginBottom: '40px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '1.4rem',
              color: '#333',
              marginBottom: '15px',
              fontWeight: 'bold',
            }}
          >
            2. 💘 Who was Anuj's first crush in college?
          </label>

          <input
            type='text'
            value={answers.crush}
            onChange={(e) => setAnswers({ ...answers, crush: e.target.value })}
            placeholder='Enter the name...'
            required
            style={{
              width: '100%',
              padding: '18px',
              fontSize: '1.1rem',
              border: '3px solid #667eea',
              borderRadius: '12px',
            }}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div style={{ textAlign: 'center' }}>
          <button
            type='submit'
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              padding: '18px 60px',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
            }}
          >
            Submit Answers! 🎁
          </button>
        </div>
      </form>
    </div>
  )
}

export default Questionaire
