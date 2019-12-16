import React, { PureComponent } from 'react'
import { render, fireEvent } from '@testing-library/react'
import propTypes from 'prop-types'
import {
  Dropdown,
  DropdownBody,
  DropdownToggle,
  DropdownContent,
  DropdownContentControlled,
} from '../index'

describe('Dropdown', () => {
  describe('DropdownContent', () => {
    const setup = () => {
      const toggleText = 'Click To Toggle'
      const contentBody = 'Some Content'

      const utils = render(
        <Dropdown>
          <DropdownToggle><span>{toggleText}</span></DropdownToggle>
          <DropdownContent>
            <DropdownBody><span>{contentBody}</span></DropdownBody>
          </DropdownContent>
        </Dropdown>,
      )
      const toggleElem = utils.getByText(toggleText)
      const dropdownElem = utils.getByRole('dropdown')

      return {
        toggleElem,
        dropdownElem,
        ...utils,
      }
    }

    it('renders default dropdown with popper', () => {
      // given a dropdown
      const { toggleElem, dropdownElem } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]
      expect(dropdownElem).not.toHaveClass('mc-dropdown--active')

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownElem).toHaveClass('mc-dropdown--active')
      expect(rootHtml).toHaveClass('mc-dropdown__html--open')

      // after clicking outside the dropdown
      fireEvent.click(document.body)
      expect(dropdownElem).not.toHaveClass('mc-dropdown--active')
      expect(rootHtml).not.toHaveClass('mc-dropdown__html--open')
    })
  })

  describe('DropdownContentControlled', () => {
    class TestControlledDropdown extends PureComponent {
      state = {
        show: false,
      }

      static propTypes = {
        toggleText: propTypes.string.isRequired,
        contentBody: propTypes.string.isRequired,
      }

      toggleShow = () => {
        this.setState(prevState => ({
          show: !prevState.show,
        }))
      }

      render () {
        return (
          <Dropdown {...this.props}>
            <DropdownToggle>
              <span onClick={this.toggleShow}>{this.props.toggleText}</span>
            </DropdownToggle>
            <DropdownContentControlled
              show={this.state.show}
              onClose={this.toggleShow}
            >
              <DropdownBody>
                <span>{this.props.contentBody}</span>
              </DropdownBody>
            </DropdownContentControlled>
          </Dropdown>
        )
      }
    }

    const setup = () => {
      const toggleText = 'Click To Toggle'
      const contentBody = 'Some Content'

      const utils = render(
        <TestControlledDropdown
          toggleText={toggleText}
          contentBody={contentBody}
        />,
      )
      const toggleElem = utils.getByText(toggleText)
      const dropdownElem = utils.getByRole('dropdown')

      return {
        toggleElem,
        dropdownElem,
        ...utils,
      }
    }

    it('renders default, controlled dropdown with popper', () => {
      // given a dropdown
      const { toggleElem, dropdownElem } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]
      expect(dropdownElem).not.toHaveClass('mc-dropdown--active')

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownElem).toHaveClass('mc-dropdown--active')
      expect(rootHtml).toHaveClass('mc-dropdown__html--open')

      // after clicking outside the dropdown
      fireEvent.click(document.body)
      expect(dropdownElem).not.toHaveClass('mc-dropdown--active')
      expect(rootHtml).not.toHaveClass('mc-dropdown__html--open')
    })
  })
})
