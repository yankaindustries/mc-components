import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import Sticky from '../Sticky'
import CodeExample from '../../utils/CodeExample'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import withAddons from '../../utils/withAddons'
import Button from '../Button'
import Input from '../Input'
import RevealOnScroll from '../RevealOnScroll'

class RevealOnScrollStory extends PureComponent {
  state = {
    showAfter: 0,
    transition: undefined,
  }

  toggle = name => () =>
    this.setState(prevState => ({
      [name]: prevState[name] ? undefined : true,
    }))

  handleInputOnChange = (event) => {
    this.setState({ showAfter: parseInt(event.target.value || 0, 10) })
  }

  render () {
    const { showAfter, transition } = this.state
    return (
      <div className='container mc-sticky--container'>
        <DocHeader
          title='RevealOnScroll'
          description='
            A helper component to manage revealing content
            once a user scrolls X number of pixles down the screen
          '
        />

        <DocSection title='ShowAfter X Pixels'>
          <div className='row'>
            <div className='col-2'>
              <Input
                value={`${showAfter}`}
                onChange={this.handleInputOnChange}
              />
            </div>
            <div className='col-auto'>
              <Button
                kind={transition ? 'primary' : 'secondary'}
                onClick={this.toggle('transition')}
              >
                Transition
              </Button>
            </div>
          </div>

          <CodeExample>
            <div className='mc-py-12 mc-text--center'>

              <Sticky
                position={'top'}
                offset={0}
              >
                <RevealOnScroll showAfter={showAfter} transition={transition}>
                  <div className='mc-sticky--navbar'>
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
                </RevealOnScroll>
              </Sticky>
            </div>
          </CodeExample>
        </DocSection>
      </div>
    )
  }
}

storiesOf('Components|RevealOnScroll', module)
  .add('Summary', withAddons({
    path: 'components/RevealOnScroll/index.stories.js',
    component: Sticky,
  })(() => <RevealOnScrollStory />))
