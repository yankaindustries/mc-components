import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Badge from '../Badge'
import Icon from '../Icons'


const KEY_ESCAPE = 'Escape'
const KEY_BACKSPACE = 'Backspace'
const KEY_TAB = 'Tab'
const KEY_ENTER = 'Enter'
const KEY_COMMA = ','
const KEY_SEMICOLON = ';'
const KEYS_ACCEPT = [KEY_TAB, KEY_ENTER, KEY_COMMA, KEY_SEMICOLON]

const VALUE_EMPTY = ''


const Tags = ({
  collection = [],
  onChange = () => {},
}) => {
  const inputRef = useRef(null)
  const [value, setValue] = useState(VALUE_EMPTY)
  const [focus, setFocus] = useState(false)

  const handleContainerClick = () => {
    if (!inputRef.current) return

    inputRef.current.focus()
  }

  const handleInputFocus = () => {
    setFocus(true)
  }

  const handleInputBlur = () => {
    setFocus(false)
  }

  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  const handleAcceptDown = (event) => {
    if (value === VALUE_EMPTY) return

    event.preventDefault()

    onChange([...collection, value])
    setValue(VALUE_EMPTY)
  }

  const handleEscapeDown = () => {
    setValue(VALUE_EMPTY)
  }

  const handleBackspaceDown = () => {
    if (value !== VALUE_EMPTY) return

    onChange(collection.slice(0, -1))
  }

  const handleKeyDown = (event) => {
    if (KEYS_ACCEPT.includes(event.key)) handleAcceptDown(event)
    if (event.key === KEY_ESCAPE) handleEscapeDown(event)
    if (event.key === KEY_BACKSPACE) handleBackspaceDown(event)
  }

  const handleRemoveClick = index => () => {
    const newCollection = [...collection]
    newCollection.splice(index, 1)
    onChange(newCollection)
  }

  const containerClasses = cn({
    'mc-form-element mc-form-tags': true,
    'mc-form-element--focus': focus,
  })

  return (
    <div
      className={containerClasses}
      onClick={handleContainerClick}
    >
      {collection.map((item, index) => (
        <div className='mc-form-tags__tag' key={item}>
          <Badge>
            {item}
            <Icon
              kind='close'
              onClick={handleRemoveClick(index)}
              className='mc-icon mc-mr-n2 mc-ml-1 mc-clickable'
            />
          </Badge>
        </div>
      ))}

      <input
        type='text'
        ref={inputRef}
        className='mc-form-element__element'
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        size={value.length || 1}
        value={value}
      />
    </div>
  )
}

Tags.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
}

export default Tags
