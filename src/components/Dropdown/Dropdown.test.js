import React, { PureComponent } from 'react'
import { render, fireEvent } from '@testing-library/react'
import propTypes from 'prop-types'
import {
  Dropdown,
  DropdownBody,
  DropdownHeader,
  DropdownFooter,
  DropdownItem,
  DropdownToggle,
  DropdownContent,
  DropdownContentControlled,
} from '../index'

describe('Dropdown', () => {
  const CLASS_DROPDOWN_ACTIVE = 'mc-dropdown--active'
  const CLASS_DROPDOWN_HTML_OPEN = 'mc-dropdown__html--open'

  const dropdownIsVisible = (rootHtml, dropdownElem) => (
    rootHtml.classList.contains(CLASS_DROPDOWN_HTML_OPEN) &&
    dropdownElem.classList.contains(CLASS_DROPDOWN_ACTIVE)
  )

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

    it('renders default dropdown and toggles', () => {
      // given a dropdown
      const { toggleElem, dropdownElem } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()

      // after clicking outside the dropdown
      fireEvent.click(document.body)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()
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

    it('renders default, controlled dropdown and toggles', () => {
      // given a dropdown
      const { toggleElem, dropdownElem } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()

      // after clicking outside the dropdown
      fireEvent.click(document.body)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()
    })
  })

  describe('DropdownBody & stuffs', () => {
    const toggleText = 'Click To Toggle'
    const contentHeader = 'Some Header'
    const contentBody = 'Some Content'
    const contentFooter = 'Some Footer'
    let dropdownItemClicked

    beforeEach(() => {
      dropdownItemClicked = false
    })

    const clickItem = () => {
      console.log('DROPDOWN ITEM CLICKED!!!')
      dropdownItemClicked = true
    }

    const setup = () => {
      const utils = render(
        <Dropdown>
          <DropdownToggle><span>{toggleText}</span></DropdownToggle>
          <DropdownContent>
            <DropdownHeader><span>{contentHeader}</span></DropdownHeader>
            <DropdownBody>
              <DropdownItem
                onClick={clickItem}
                closeOnClick={true}
              >
                <span>{contentBody}</span>
              </DropdownItem>
              </DropdownBody>
            <DropdownFooter><span>{contentFooter}</span></DropdownFooter>
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

    it('renders default dropdown and toggles', () => {
      // given a dropdown
      const { toggleElem, dropdownElem } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()

      // after clicking outside the dropdown
      fireEvent.click(document.body)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()
    })

    it('renders Header, Body & Footer and closes when DropdownItem is clicked', () => {
      // given a dropdown
      const { getByText, toggleElem, dropdownElem } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]

      // ensure everything is getting rendered
      expect(getByText(contentHeader)).not.toBeNull()
      expect(getByText(contentBody)).not.toBeNull()
      expect(getByText(contentFooter)).not.toBeNull()

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()

      // clicking on the DropdownItem should close
      fireEvent.click(getByText(contentBody))
      expect(dropdownItemClicked).toBeTruthy()
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()
    })
  })
})
