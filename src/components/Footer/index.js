import React, { PureComponent } from 'react'

import logo from '../../assets/logo.svg'
import sslBadge from '../../assets/ssl-badge.svg'

export default class Footer extends PureComponent {
  render () {
    return (
      <div id='mc-footer'>
        <div className='mc-container mc-contain-inner'>
          <img src={logo} alt='Logo wordmark' id='logo-footer' />

          <div className='nav-footer'>
            <ul className='nav-footer-items'>
              <li className='nav-footer-item'>
                  <a href='/#now-available'>Browse Classes</a>
              </li>

              <li className='nav-footer-item'>
                <a href='/all-access-pass'>All-Access</a>
              </li>

              <li className='nav-footer-item'>
                <a href='/gift'>Gifts</a>
              </li>

              <li className='nav-footer-item'>
                <a target='
                _blank' href='https://masterclasshelp.zendesk.com/hc/en-us'>Help Center</a>
              </li>

              <li className='nav-footer-item'>
                <a target='
                _blank' href='https://masterclasshelp.zendesk.com/hc/en-us/articles/205081248'>Contact Us</a>
              </li>

              <li className='nav-footer-item'>
                <a href='/privacy'>Privacy</a>
              </li>

              <li className='nav-footer-item'>
                <a href='/terms'>Terms</a>
              </li>

              <li className='nav-footer-item'>
                <a href='http://careers.masterclass.com'>Careers</a>
              </li>
            </ul>

            <p className='copyright'>
              Copyright &copy; 2018 MasterClass
            </p>
          </div>

          <img src={sslBadge} alt='Secured by Expedited SSL' className='undefined' id='ssl-badge' name='ssl-badge' />
        </div>
      </div>
    )
  }
}
