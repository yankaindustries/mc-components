import React, { PureComponent } from 'react'
import cn from 'classnames'

import logo from '../../assets/logo.svg'
import sslBadge from '../../assets/ssl-badge.svg'

export default class Footer extends PureComponent {
  infoBlock = React.createRef()

  render () {
    return (
      <div id="mc-footer">
        <div class="mc-container mc-contain-inner">
          <img src={logo} alt='Logo wordmark' id="logo-footer" />

          <div class="nav-footer">
            <ul class="nav-footer-items">
              <li class="nav-footer-item">
                  <a href="/#now-available">Browse Classes</a>
              </li>

              <li class="nav-footer-item">
                <a href="/all-access-pass">All-Access</a>
              </li>

              <li class="nav-footer-item">
                <a href="/gift">Gifts</a>
              </li>

              <li class="nav-footer-item">
                <a target="
                _blank" href="https://masterclasshelp.zendesk.com/hc/en-us">Help Center</a>
              </li>

              <li class="nav-footer-item">
                <a target="
                _blank" href="https://masterclasshelp.zendesk.com/hc/en-us/articles/205081248">Contact Us</a>
              </li>

              <li class="nav-footer-item">
                <a href="/privacy">Privacy</a>
              </li>

              <li class="nav-footer-item">
                <a href="/terms">Terms</a>
              </li>

              <li class="nav-footer-item">
                <a href="http://careers.masterclass.com">Careers</a>
              </li>
            </ul>

            <p class="copyright">
              Copyright &copy; 2018 MasterClass
            </p>
          </div>

          <img src={sslBadge} alt="Secured by Expedited SSL" class="undefined" id="ssl-badge" name="ssl-badge" />
        </div>
      </div>
    )
  }
}
