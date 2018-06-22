import React from 'react'
import { bool, func } from 'prop-types'
import cn from 'classnames'

const MobileNavButton = ({ isOpen, onClick }) => {
  const classNames = cn(
    'mobile-nav-button',
    { 'mobile-nav-button--opened': isOpen },
  )

  return (
    <div onClick={onClick} className={classNames}>
      <span className='mobile-nav-button__lines' />
    </div>
  )
}

MobileNavButton.propTypes = {
  isOpen: bool.isRequired,
  onClick: func.isRequired,
}

export default MobileNavButton
