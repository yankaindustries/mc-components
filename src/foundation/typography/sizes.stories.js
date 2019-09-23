import React, { PureComponent } from 'react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import PropExample from '../../utils/PropExample'

class CalcSize extends PureComponent {
  divRef = React.createRef()

  state = {}

  updateSizes = () => {
    this.setState({
      fontSize: window.getComputedStyle(this.divRef.current).fontSize,
    })
  }

  componentDidMount () {
    this.updateSizes()
    window.addEventListener('resize', this.updateSizes)
  }

  render () {
    return (
      <span className='mc-code mc-opacity--muted' ref={this.divRef}>
        {this.state.fontSize}
      </span>
    )
  }
}

class Sizes extends PureComponent {
  render () {
    return (
      <div className='container'>
        <DocHeader
          title='Typography - Sizes'
          description='Available heading and body size options.'
        />

        <PropExample name='.mc-text-d3'>
          <h1 className='mc-text-d3'>
            Gordon Ramsay <CalcSize />
          </h1>
        </PropExample>

        <PropExample name='.mc-text-d2'>
          <h1 className='mc-text-d2'>
            Gordon Ramsay <CalcSize />
          </h1>
        </PropExample>

        <PropExample name='.mc-text-d1'>
          <h1 className='mc-text-d1'>
            Gordon Ramsay <CalcSize />
          </h1>
        </PropExample>

        <PropExample name='.mc-text-h1'>
          <h1 className='mc-text-h1'>
            Gordon Ramsay <CalcSize />
          </h1>
        </PropExample>

        <PropExample name='.mc-text-h2'>
          <h2 className='mc-text-h2'>
            All-Access Pass <CalcSize />
          </h2>
        </PropExample>

        <PropExample name='.mc-text-h3'>
          <h3 className='mc-text-h3'>
            Now Available <CalcSize />
          </h3>
        </PropExample>

        <PropExample name='.mc-text-h4'>
          <h4 className='mc-text-h4'>
            Diane Von Furstenburg <CalcSize />
          </h4>
        </PropExample>

        <PropExample name='.mc-text-h5'>
          <h5 className='mc-text-h5'>
            Teaches Fashion <CalcSize />
          </h5>
        </PropExample>

        <PropExample name='.mc-text-h6'>
          <h6 className='mc-text-h6'>
            Account Settings <CalcSize />
          </h6>
        </PropExample>

        <PropExample name='.mc-text-h7'>
          <h6 className='mc-text-h7'>
            Account Settings <CalcSize />
          </h6>
        </PropExample>

        <PropExample name='.mc-text-h8'>
          <h6 className='mc-text-h8'>
            Account Settings <CalcSize />
          </h6>
        </PropExample>

        <PropExample name='.mc-text-large'>
          <p className='mc-text-large'>
            Online classes taught by the world&#39;s greatest minds.<br />
            Now get unlimited access to all classes.
            <CalcSize />
          </p>
        </PropExample>

        <PropExample name='body'>
          <p>
            Online classes taught by the world&#39;s greatest minds.<br />
            Now get unlimited access to all classes.
            <CalcSize />
          </p>
        </PropExample>

        <PropExample name='.mc-text-small'>
          <p className='mc-text-small'>
            Online classes taught by the world&#39;s greatest minds.<br />
            Now get unlimited access to all classes.
            <CalcSize />
          </p>
        </PropExample>

        <PropExample name='.mc-text-x-small'>
          <p className='mc-text-x-small'>
            Online classes taught by the world&#39;s greatest minds.<br />
            Now get unlimited access to all classes.
            <CalcSize />
          </p>
        </PropExample>
      </div>
    )
  }
}

export default withAddons({
  path: 'foundation/typography/sizes.stories.js',
})(() => <Sizes />)
