import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import Sticky from '.'
import CodeExample from '../../utils/CodeExample'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import withAddons from '../../utils/withAddons'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'

const positionOptions = [
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' },
]

class StickyStory extends PureComponent {
  state = {
    position: 'top',
    offset: 0,
  }

  set = name => value =>
    this.setState({
      [name]: value,
    })

  handleInputOnChange = (event) => {
    this.setState({ offset: parseInt(event.target.value || 0, 10) })
  }

  render () {
    const { position, offset } = this.state
    return (
      <div className='container mc-sticky--container'>
        <DocHeader
          title='Sticky'
          description='A wrapper for fixing your component&apos;s position'
        />

        <DocSection title='Demo'>
          <div className='row'>
            <div className='col-2'>
              <Select
                options={positionOptions}
                value={position}
                onChange={this.set('position')}
              />
            </div>
            <div className='col-2'>
              <Input
                value={`${offset}`}
                onChange={this.handleInputOnChange}
              />
            </div>
          </div>

          <CodeExample>
            <div className='mc-py-12 mc-text--center'>
              <Sticky
                position={position}
                offset={offset}
              >
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
              </Sticky>
            </div>
          </CodeExample>
        </DocSection>
      </div>
    )
  }
}

storiesOf('Components|Sticky', module)
  .add('Summary', withAddons({
    path: 'components/Sticky/index.stories.js',
    component: Sticky,
  })(() => <StickyStory />))
