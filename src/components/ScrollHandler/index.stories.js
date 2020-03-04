import { storiesOf } from '@storybook/react'
import cn from 'classnames'
import React, { PureComponent } from 'react'
import CodeExample from '../../utils/CodeExample'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import withAddons from '../../utils/withAddons'
import Button from '../Button'
import Input from '../Input'
import Sticky from '../Sticky'
import ScrollHandler from './index'

class ScrollHandlerStory extends PureComponent {
  state = {
    scrolledTo: 0,
  }

  handleInputOnChange = (event) => {
    this.setState({ scrolledTo: parseInt(event.target.value || 0, 10) })
  }

  render () {
    const { scrolledTo } = this.state

    return (
      <div className='container mc-sticky--container'>
        <DocHeader
          title='ScrollHandler'
          description='A helper component to wrap scroll position conditions'
        />

        <DocSection title='Scrolled on X Pixels'>
          <div className='row'>
            <div className='col-2'>
              <Input
                value={`${scrolledTo}`}
                onChange={this.handleInputOnChange}
              />
            </div>
          </div>

          <CodeExample>
            <div className='mc-py-12 mc-text--center'>
              <Sticky
                position={'top'}
                offset={0}
              >
                <ScrollHandler to={scrolledTo}>
                {({ scrolled }) => {
                    const classNames = cn({
                      'mc-sticky--navbar': true,
                      'mc-scroll-handler--navbar': true,
                      'mc-scroll-handler--navbar--show': scrolled,
                    })
                    return (
                      <div className={classNames}>
                        <div className='row'>
                          <div className='col-auto'>
                            <Button kind='google'>
                              Google
                            </Button>
                          </div>
                          <div className='col-auto'>
                            <Button kind='facebook'>
                              Facebook
                            </Button>
                          </div>
                          <div className='col-auto'>
                            <Button kind='twitter'>
                              Twitter
                            </Button>
                          </div>
                          <div className='col-auto'>
                            <Button kind='pinterest'>
                              Pinterest
                            </Button>
                          </div>
                          <div className='col-auto'>
                            <Button kind='paypal'>
                              Paypal
                            </Button>
                          </div>
                        </div>
                      </div>
                    )
                  }}
                </ScrollHandler>
              </Sticky>
            </div>
          </CodeExample>
        </DocSection>
      </div>
    )
  }
}

storiesOf('Utilities|ScrollHandler', module)
  .add('default', withAddons({
    path: 'components/ScrollHandler/index.stories.js',
    component: Sticky,
  })(() => <ScrollHandlerStory />))
