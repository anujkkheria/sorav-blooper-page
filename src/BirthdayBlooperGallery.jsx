import React, { useState, useEffect } from 'react'
import pic1 from './assets/1.jpeg'
import pic2 from './assets/2.jpeg'
import pic3 from './assets/3.jpeg'
import pic4 from './assets/4.jpeg'
import pic5 from './assets/5.jpeg'
import pic6 from './assets/6.jpeg'
import pic7 from './assets/7.jpeg'
import pic8 from './assets/8.jpeg'
import frame from './assets/frame.png'
export default function BirthdayBlooperGallery() {
  const [confetti, setConfetti] = useState([])
  const [balloons, setBalloons] = useState([])

  useEffect(() => {
    // Create confetti
    const confettiInterval = setInterval(() => {
      const newConfetti = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 3,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      }

      setConfetti((prev) => [...prev, newConfetti])

      setTimeout(() => {
        setConfetti((prev) => prev.filter((c) => c.id !== newConfetti.id))
      }, 3000)
    }, 300)

    // Create balloons
    const balloonInterval = setInterval(() => {
      const balloonEmojis = ['🎈', '🎊', '🎁', '🎀']
      const newBalloon = {
        id: Date.now() + Math.random(),
        emoji: balloonEmojis[Math.floor(Math.random() * 4)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() > 0.5 ? 6 : 7,
      }

      setBalloons((prev) => [...prev, newBalloon])

      setTimeout(() => {
        setBalloons((prev) => prev.filter((b) => b.id !== newBalloon.id))
      }, newBalloon.duration * 1000)
    }, 2000)

    return () => {
      clearInterval(confettiInterval)
      clearInterval(balloonInterval)
    }
  }, [])

  const photos = [
    {
      id: 1,
      img: pic3,
      caption: 'That bean bag flight delay...',
      rotation: -3,
      delay: 0,
    },
    { id: 2, img: pic5, caption: 'Classic you! 😄', rotation: 2, delay: 0.5 },
    {
      id: 3,
      caption: "We'll never let you forget this",
      img: pic7,
      rotation: -2,
      delay: 1,
    },
    {
      id: 4,
      img: pic8,
      caption: 'Pure comedy gold! 🎭',
      rotation: 3,
      delay: 1.5,
    },
    {
      id: 5,
      img: pic6,
      caption: 'Model Material 💃',
      rotation: -4,
      delay: 2,
    },
    {
      id: 6,
      img: pic4,
      caption: 'short depatures and deeper bonds',
      rotation: -4,
      delay: 2.5,
    },
    {
      id: 7,
      img: pic1,
      caption: 'The cool guy pic gone creepy',
      rotation: -4,
      delay: 3,
    },
    {
      id: 8,
      img: pic2,
      caption: 'Fashinista at the wedding ',
      rotation: 2,
      delay: 3.5,
    },
    {
      id: 9,
      img: frame,
      caption: 'Tu bhi kya yaad rakhega',
      rotation: 2,
      delay: 4,
    },
  ]

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
      }}
    >
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          style={{
            position: 'fixed',
            width: '10px',
            height: '10px',
            background: c.color,
            left: `${c.left}%`,
            top: 0,
            animation: `confetti-fall 3s linear infinite`,
            animationDelay: `${c.delay}s`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Balloons */}
      {balloons.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'fixed',
            bottom: '-100px',
            fontSize: '3rem',
            left: `${b.left}%`,
            animation: `float-up ${b.duration}s ease-in infinite`,
            animationDelay: `${b.delay}s`,
            pointerEvents: 'none',
          }}
        >
          {b.emoji}
        </div>
      ))}

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '60px',
            animation: 'bounce-in 1s ease-out',
          }}
        >
          <h1
            style={{
              fontSize: '4rem',
              color: '#fff',
              textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
              marginBottom: '20px',
              animation: 'rainbow 3s linear infinite',
            }}
          >
            🎉 Happy Birthday! 🎂
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            A Collection of Your Most "Memorable" Moments 😂
          </p>
        </div>

        {/* Gallery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            padding: '20px',
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className='photo-frame'
              style={{
                background: 'white',
                padding: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transform: `rotate(${photo.rotation}deg)`,
                transition: 'all 0.3s ease',
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${photo.delay}s`,
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.currentTarget.style.animation = 'none'
                setTimeout(() => {
                  e.currentTarget.style.animation =
                    'float 3s ease-in-out infinite'
                  e.currentTarget.style.animationDelay = `${photo.delay}s`
                }, 10)
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '300px',
                  background:
                    'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                onClick={() => handleClick(photo.link)}
              >
                <img
                  src={photo.img}
                  style={{ height: '100%', width: '100%' }}
                  alt=''
                />
              </div>
              <div
                style={{
                  marginTop: '15px',
                  textAlign: 'center',
                  fontSize: '1.1rem',
                  color: '#333',
                  fontWeight: 'bold',
                }}
              >
                {photo.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float-up {
          to {
            transform: translateY(-120vh) rotate(20deg);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes rainbow {
          0% { color: #ff6b6b; }
          25% { color: #ffd93d; }
          50% { color: #6bcf7f; }
          75% { color: #4d96ff; }
          100% { color: #ff6b6b; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotation));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation));
          }
        }

        .photo-frame:hover {
          transform: scale(1.1) rotate(0deg) !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          z-index: 10;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          p {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  )
}
