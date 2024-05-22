import './index.css'

const Navbar = props => {
  const {timerInseconds, score} = props

  const toggleScoreContainer = () => (
    <ul className='score-timer-container'>
      <li className='navbar-score-container'>
        <p className='navbar-score'>Score:</p>
        <p className='score-design'>{`${score}`}</p>
      </li>
      <li className='timer-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png'
          alt='timer'
          className='timer-png'
        />
        <p className='timer-design'>{timerInseconds} sec</p>
      </li>
    </ul>
  )

  return (
    <nav className='nav-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
        alt='website logo'
        className='website-logo'
      />
      {toggleScoreContainer()}
    </nav>
  )
}

export default Navbar
