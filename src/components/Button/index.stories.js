import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'

import Button from '../Button'
import Select from '../Select'
import Icon from '../Icons'
import Separator from '../Separator'


const kindOptions = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'tertiary', label: 'Tertiary' },
  { value: 'success', label: 'Success' },
  { value: 'link', label: 'Link' },
]

const sizeOptions = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
]

const shapeOptions = [
  { value: undefined, label: 'Default' },
  { value: 'fullWidth', label: 'Full Width' },
  { value: 'symmetrical', label: 'Symmetrical' },
  { value: 'rounded', label: 'Rounded' },
]


class ButtonStory extends PureComponent {
  state = {
    disabled: undefined,
    kind: 'primary',
    loading: undefined,
    shape: undefined,
    size: 'medium',
  }

  set = name => value =>
    this.setState({
      [name]: value,
    })

  toggle = name => () =>
    this.setState(prevState => ({
      [name]: prevState[name] ? undefined : true,
    }))

  render () {
    const {
      disabled,
      kind,
      loading,
      size,
      shape,
    } = this.state

    return (
      <div className='container'>
        <DocHeader
          title='Button'
          description='
            A variety of different buttons to help users
            identify and give clear meaning to navigation.
          '
        />

        <DocSection title='Demo'>
          <div className='row'>
            <div className='col-2'>
              <Select
                options={kindOptions}
                value={kind}
                onChange={this.set('kind')}
              />
            </div>

            <div className='col-2'>
              <Select
                options={sizeOptions}
                value={size}
                onChange={this.set('size')}
              />
            </div>

            <div className='col-auto'>
              <Button
                kind={disabled ? 'primary' : 'secondary'}
                onClick={this.toggle('disabled')}
              >
                Disabled
              </Button>
            </div>

            <div className='col-auto'>
              <Button
                kind={loading ? 'primary' : 'secondary'}
                onClick={this.toggle('loading')}
              >
                Loading
              </Button>
            </div>

            <div className='col-2'>
              <Select
                options={shapeOptions}
                value={shape}
                onChange={this.set('shape')}
              />
            </div>
          </div>

          <CodeExample>
            <div className='mc-py-12 mc-text--center'>
              <Button
                kind={kind}
                size={size}
                disabled={disabled}
                loading={loading}
                fullWidth={shape === 'fullWidth' ? true : undefined}
                symmetrical={shape === 'symmetrical' ? true : undefined}
                rounded={shape === 'rounded' ? true : undefined}
              >
                {['symmetrical', 'rounded'].includes(shape)
                  ? <Icon kind='magnifying-glass' />
                  : 'Button'
                }
              </Button>
            </div>
          </CodeExample>
        </DocSection>

        <DocSection title='Properties'>
          <InvertedMirror>
            <PropExample
              name='kind'
              type='string'
              description={`
                Change the way your button looks by adjusting the 'kind' property.
              `}
            >
              <div className='row'>
                <div className='col-auto'>
                  <Button>
                    Button
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='secondary'>
                    Secondary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='tertiary'>
                    Tertiary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='success'>
                    Success
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='link'>
                    Link
                  </Button>
                </div>

                <div className='col-12'>
                  <Separator />
                </div>

                <div className='col-12'>
                  <h6 className='mc-text-h6'>
                    Third-Party
                  </h6>
                </div>

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
                  <Button kind='linked-in'>
                    Linkedin
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='messenger'>
                    Messenger
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
                <div className='col-auto'>
                  <Button kind='apple'>
                    Apple pay
                  </Button>
                </div>
              </div>
            </PropExample>

            <PropExample
              name='size'
              type='string'
            >
              <div className='row'>
                <div className='col-auto'>
                  <Button size='small'>
                    Button
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='secondary' size='small'>
                    Secondary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='tertiary' size='small'>
                    Tertiary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='link' size='small'>
                    Link
                  </Button>
                </div>
              </div>
            </PropExample>

            <PropExample
              name='disabled'
              type='boolean'
            >
              <div className='row'>
                <div className='col-auto'>
                  <Button disabled>
                    Button
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='secondary' disabled>
                    Secondary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='tertiary' disabled>
                    Tertiary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='link' disabled>
                    Link
                  </Button>
                </div>
              </div>
            </PropExample>

            <PropExample
              name='loading'
              type='boolean'
            >
              <div className='row'>
                <div className='col-auto'>
                  <Button loading>
                    Button
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='secondary' loading>
                    Secondary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='tertiary' loading>
                    Tertiary
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='link' loading>
                    Link
                  </Button>
                </div>
              </div>
            </PropExample>

            <PropExample
              name='fullWidth'
              type='boolean'
            >
              <div className='row'>
                <div className='col-12'>
                  <Button fullWidth>
                    Button
                  </Button>
                </div>

                <div className='col-6'>
                  <Button secondary fullWidth>
                    Secondary
                  </Button>
                </div>

                <div className='col-6'>
                  <Button tertiary fullWidth>
                    Tertiary
                  </Button>
                </div>
              </div>
            </PropExample>

            <PropExample
              name='Icons'
              description={
                <span>
                  You can embed icons using the
                  {' '}
                  <span className='mc-code'>Icon</span>
                  {' '}
                  component.
                </span>
              }
            >
              <div className='row'>
                <div className='col-auto'>
                  <Button>
                    <span className='d-none d-sm-block mc-mr-3'>Next (on desktop)</span>
                    <Icon kind='chevron-right' />
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button>
                    <span className='d-block d-sm-none mc-mr-3'>Next (on mobile)</span>
                    <Icon kind='chevron-right' />
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='secondary'>
                    <Icon kind='lock' className='mc-mr-3' />
                    Lock
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='tertiary'>
                    <Icon kind='magnifying-glass' />
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='success'>
                    <Icon kind='check' className='mc-mr-3' />
                    Saved
                  </Button>
                </div>

                <div className='col-auto'>
                  <Button kind='link'>
                    <Icon kind='close' className='mc-mr-3' />
                    Close
                  </Button>
                </div>
              </div>
            </PropExample>

            <PropExample
              name='symmetrical'
              type='boolean'
              description='Applies the same padding all around the button'
            >
              <div className='row'>
                <div className='col-auto'>
                  <Button symmetrical>
                    <Icon kind='google' />
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='secondary' symmetrical>
                    <Icon kind='plus' />
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='tertiary' symmetrical>
                    <Icon kind='filter' />
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='link' symmetrical>
                    <Icon kind='rewind' />
                  </Button>
                </div>
              </div>
            </PropExample>

            <PropExample
              name='rounded'
              type='boolean'
            >
              <div className='row'>
                <div className='col-auto'>
                  <Button rounded>
                    <Icon kind='google' />
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='secondary' rounded>
                    <Icon kind='plus' />
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='tertiary' rounded>
                    <Icon kind='filter' />
                  </Button>
                </div>
                <div className='col-auto'>
                  <Button kind='link' rounded>
                    <Icon kind='rewind' />
                  </Button>
                </div>
              </div>
            </PropExample>
          </InvertedMirror>
        </DocSection>
      </div>
    )
  }
}

storiesOf('Components|Button', module)
  .add('Summary', withAddons({
    path: 'components/Button/index.stories.js',
    component: Button,
  })(() => <ButtonStory />))
