import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { NumberToPX } from '../../utils/helpers'

export default class ClassCard extends PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    teacherName: PropTypes.string.isRequired,
    teacherDescription: PropTypes.string.isRequired,
    action: PropTypes.func,
    href: PropTypes.string,
    renderLinkComponent: PropTypes.func,
    className: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }

  static defaultProps = {
    className: '',
    width: '',
    height: '',
  }

  static renderTriggerComponentPropTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  renderTriggerComponent = (children) => {
    const { renderLinkComponent, href, action } = this.props

    if (renderLinkComponent) {
      return renderLinkComponent({
        children,
        className: 'mc-class-card__trigger',
      })
    }

    if (href) {
      return (
        <a className='mc-class-card__trigger mc-class-card__trigger--anchor' href={href}>
          {children}
        </a>
      )
    }

    if (action) {
      return (
        <button className='mc-class-card__trigger mc-class-card__trigger--button' onClick={action}>
          {children}
        </button>
      )
    }

    return children
  }

  render () {
    const {
      imageUrl,
      teacherName,
      teacherDescription,
      className,
      imageAlt,
      width,
      height,
    } = this.props

    const classNames = `mc-class-card ${className}`

    return (
      <div
        className={classNames}
        style={{
          width: NumberToPX(width),
          height: NumberToPX(height),
        }}
      >
        {this.renderTriggerComponent(
          <Fragment>
            <img className='mc-class-card__image' src={imageUrl} alt={imageAlt} />
            <div className='mc-class-card__caption'>
              <h2 className='mc-class-card__caption__title'>
                {teacherName}
              </h2>
              <h3 className='mc-class-card__caption__subtitle'>
                {teacherDescription}
              </h3>
            </div>
          </Fragment>,
        )}
      </div>
    )
  }
}
