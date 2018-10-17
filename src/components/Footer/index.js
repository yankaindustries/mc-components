import React, { PureComponent, Fragment } from 'react'
import { bool } from 'prop-types'

import Logo from '../Icons/Logo'
import SSLBadge from '../Icons/SslBadge'

export default class Footer extends PureComponent {
  static propTypes = {
    isMinimal: bool,
  }

  static defaultProps = {
    isMinimal: false,
  }

  render () {
    const { isMinimal } = this.props

    return (
      <Fragment>
        <div className='mc-site-footer container'>
          <div className='row align-items-center justify-content-md-between'>
            <div className='mc-text--center col-12 col-xl-auto'>
              <Logo className='mc-site-footer__logo-footer' />
            </div>

            {!isMinimal &&
              <Fragment>
                <ul className='mc-site-footer__links col mc-text--bold mc-text--uppercase'>
                  <li className='mc-site-footer__link'>
                    <a href='/#now-available'>Browse Classes</a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a href='/all-access-pass'>All-Access</a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a href='/gift'>Gifts</a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://masterclasshelp.zendesk.com/hc/en-us'
                    >
                      Support
                    </a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://masterclasshelp.zendesk.com/hc/en-us/articles/205081248'
                    >
                      Contact Us
                    </a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a href='/privacy'>Privacy</a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a href='/terms'>Terms</a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a href='http://careers.masterclass.com'>Careers</a>
                  </li>

                  <li className='mc-site-footer__link'>
                    <a href='/sitemap'>Sitemap</a>
                  </li>

                  <p className='mc-site-footer__copyright mc-text-legal mc-text--capitalize'>
                    Copyright &copy; 2018 MasterClass
                  </p>
                </ul>

                <div className='mc-text--center col-12 col-xl-auto'>
                  <SSLBadge className='mc-site-footer__ssl-badge' />
                </div>
              </Fragment>
            }
          </div>
        </div>
      </Fragment>
    )
  }
}
