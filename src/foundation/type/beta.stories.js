import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import cn from 'classnames'

import Button from '../../components/Button'


class Summary extends PureComponent {
  state = {
    airy: false,
    uppercase: false,
  }

  toggle = (modifier) => () => {
    this.setState(state => ({ [modifier]: !state[modifier] }))
  }

  render () {
    const {
      airy,
      uppercase,
    } = this.state

    const modifierClasses = cn({
      'mc-text--airy': airy,
      'mc-text--uppercase': uppercase,
    })

    return (
      <div className='example-mc-type container'>
        <div className='example--section'>
          <h2 className='mc-text-d1'>Typography</h2>
          <p className='mc-text--muted'>
            A showcase of the available type styles in mc-components.
          </p>
        </div>

        <div className='row'>
          <div className='col-auto offset-2'>
            <Button
              onClick={this.toggle('airy')}
              secondary={!airy}
            >
              Airy
            </Button>
          </div>

          <div className='col-auto'>
            <Button
              onClick={this.toggle('uppercase')}
              secondary={!uppercase}
            >
              Uppercase
            </Button>
          </div>
        </div>

        <div className='example--section'>
          <div className='row align-items-center'>
            <div className='col-2 mc-text--right mc-text--muted'>
              d1
            </div>
            <div className='col-10'>
              <h1 className={`mcb-text-d1 ${modifierClasses}`}>
                Unlock Every Class
              </h1>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              d2
            </div>
            <div className='col-10'>
              <h2 className={`mcb-text-d2 ${modifierClasses}`}>
                All-Access Pass
              </h2>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              h1
            </div>
            <div className='col-10'>
              <h1 className={`mcb-text-h1 ${modifierClasses}`}>
                Gordon Ramsay
              </h1>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              h2
            </div>
            <div className='col-10'>
              <h2 className={`mcb-text-h2 ${modifierClasses}`}>
                All-Access Pass
              </h2>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              h3
            </div>
            <div className='col-10'>
              <h3 className={`mcb-text-h3 ${modifierClasses}`}>
                Now Available
              </h3>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              h4
            </div>
            <div className='col-10'>
              <h4 className={`mcb-text-h4 ${modifierClasses}`}>
                Diane Von Furstenburg
              </h4>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              h5
            </div>
            <div className='col-10'>
              <h5 className={`mcb-text-h5 ${modifierClasses}`}>
                Teaches Fashion
              </h5>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              h6
            </div>
            <div className='col-10'>
              <h5 className={`mcb-text-h6 ${modifierClasses}`}>
                Account Settings
              </h5>
            </div>

            <div className='col-2 mc-text--right mc-text--muted'>
              body
            </div>
            <div className='col-10'>
              <p>
                Online classes taught by the world&#39;s greatest minds.<br />
                Now get unlimited access to all classes.
              </p>
            </div>
          </div>
        </div>

        <div className='example--section'>
          <div className='mcb-space-9'>
            <div className='row'>
              <div className='col-sm-6 offset-sm-1'>
                <h2 className='mcb-text-h5 mc-text--muted mc-text--normal mc-text--airy mc-text--uppercase'>
                  Lorem Ipsum
                </h2>

                <h4 className='mcb-text-h4 mcb-space-2'>
                  Clean &amp; Simple Title Text
                </h4>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6 offset-sm-1'>
                <div className='mcb-space-9'>
                  <h3 className='mcb-text-h3 mc-text--uppercase'>
                    Group Workshop: From Here To Alli By Corey Wright
                  </h3>
                  <p className='mcb-text-intro mc-text--muted mcb-space-2'>
                    Every great story is born from intentions and obstacles. Learn how to build the "drive shaft" that will set your script in motion.
                  </p>
                  <h6 className='mcb-text-h6 mc-text--silenced mc-text--uppercase mc-text--normal mcb-space-3'>
                    Lesson 16 // 5min 40s
                  </h6>
                </div>

                <div className='mcb-space-9'>
                  <h3 className='mcb-text-h5'>
                    Group Workshop: From Here To Alli By Corey Wright
                  </h3>
                  <p className='mc-text--muted mcb-space-2'>
                    Every great story is born from intentions and obstacles. Learn how to build the "drive shaft" that will set your script in motion.
                  </p>
                  <h6 className='mcb-text-h6 mc-text--silenced mc-text--uppercase mc-text--normal mcb-space-3'>
                    Lesson 16 // 5min 40s
                  </h6>
                </div>

                <div className='mcb-space-9'>
                  <h3 className='mcb-text-h5'>
                    Group Workshop: From Here To Alli By Corey Wright
                  </h3>
                  <p className='mc-text--muted mcb-space-2'>
                    Every great story is born from intentions and obstacles. Learn how to build the "drive shaft" that will set your script in motion.
                  </p>
                  <h6 className='mcb-text-h6 mc-text--silenced mc-text--uppercase mc-text--normal mcb-space-3'>
                    Lesson 16 // 5min 40s
                  </h6>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='mcb-space-9'>
                  <h3 className='mcb-text-h7 mc-text--muted mc-text--uppercase'>
                    Up Next
                  </h3>
                </div>

                <div className='mcb-space-3'>
                  <div className='row'>
                    <div className='col-auto'>
                      <p className='mc-text--muted'>
                        4
                      </p>
                    </div>

                    <div className='col-10'>
                      <h6 className='mcb-text-h6'>
                        Mastering Ingredients: Vegetables &amp; Herbs
                      </h6>
                      <p className='mc-text--silenced mcb-space-2'>
                        Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.
                      </p>
                    </div>
                  </div>
                </div>

                <hr />

                <div className='mcb-space-3'>
                  <div className='row'>
                    <div className='col-auto'>
                      <p className='mc-text--muted'>
                        4
                      </p>
                    </div>

                    <div className='col-10'>
                      <h6 className='mcb-text-h6'>
                        Mastering Ingredients: Vegetables &amp; Herbs
                      </h6>
                      <p className='mc-text--silenced mcb-space-2'>
                        Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

storiesOf('Beta|Type', module)
  .add('Summary', () => <Summary />)
