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

describe('Dropdown Component', () => {
  const CLASS_DROPDOWN_ACTIVE = 'mc-dropdown--active'
  const CLASS_DROPDOWN_HTML_OPEN = 'mc-dropdown__html--open'

  const toggleText = 'Click To Toggle'
  const contentHeader = 'Some Header'
  const contentBody = 'Some Content'
  const contentFooter = 'Some Footer'

  const dropdownIsVisible = (rootHtml, dropdownElem) => (
    rootHtml.classList.contains(CLASS_DROPDOWN_HTML_OPEN) &&
    dropdownElem.classList.contains(CLASS_DROPDOWN_ACTIVE)
  )

  describe('Basic DropdownContent', () => {
    const renderSimpleDropdown = (
      toggleText,
      contentBody,
      placement = 'bottom-start',
    ) => (
      <Dropdown placement={placement}>
          <DropdownToggle><span>{toggleText}</span></DropdownToggle>
          <DropdownContent>
            <DropdownBody><span>{contentBody}</span></DropdownBody>
          </DropdownContent>
        </Dropdown>
    )

    const setup = () => {
      const utils = render(
        renderSimpleDropdown(toggleText, contentBody),
      )

      const reRenderDropdown = placement =>
        utils.rerender(
          renderSimpleDropdown(toggleText, contentBody, placement),
        )
      const toggleElem = utils.getByText(toggleText)
      const dropdownElem = utils.getByRole('dropdown')

      return {
        reRenderDropdown,
        toggleElem,
        dropdownElem,
        renderSimpleDropdown,
        ...utils,
      }
    }

    it('renders default dropdown and toggles', () => {
      // given a dropdown
      const { toggleElem, dropdownElem, getByText } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()

      // ensure everything is getting rendered
      expect(getByText(toggleText)).not.toBeNull()
      expect(getByText(contentBody)).not.toBeNull()

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()

      // after clicking outside the dropdown
      fireEvent.click(document.body)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()
    })

    it('re-renders when placement is added/updated', () => {
      // given a dropdown
      const { getByText, reRenderDropdown } = setup()

      // when re-rendered with new placement
      reRenderDropdown('top-end')

      // ensure everything is re-rendered correctly
      expect(getByText(toggleText)).not.toBeNull()
      expect(getByText(contentBody)).not.toBeNull()
    })
  })

  describe('DropdownContentControlled with state', () => {
    class ControlledDropdownHarness extends PureComponent {
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
      const utils = render(
        <ControlledDropdownHarness
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
      const { toggleElem, dropdownElem, getByText } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()

      // ensure everything is getting rendered
      expect(getByText(toggleText)).not.toBeNull()
      expect(getByText(contentBody)).not.toBeNull()

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()

      // after clicking outside the dropdown
      fireEvent.click(document.body)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeFalsy()
    })
  })

  describe('DropdownBody, header, footer & fringe', () => {
    let dropdownItemClicked

    beforeEach(() => {
      dropdownItemClicked = false
    })

    const clickItem = () => {
      dropdownItemClicked = true
    }

    const setup = (closeOnClick = false) => {
      const utils = render(
        <Dropdown>
          <DropdownToggle><span>{toggleText}</span></DropdownToggle>
          <DropdownContent>
            <DropdownHeader><span>{contentHeader}</span></DropdownHeader>
            <DropdownBody>
              <DropdownItem
                onClick={clickItem}
                closeOnClick={closeOnClick}
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

    it('renders Header, Body & Footer', () => {
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
    })

    it('remains open when DropdownItem is clicked', () => {
      // given a dropdown
      const { getByText, toggleElem, dropdownElem } = setup()
      const rootHtml = document.getElementsByTagName('html')[0]

      // after the toggle is clicked
      fireEvent.click(toggleElem)
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()

      // clicking on the DropdownItem should NOT close
      fireEvent.click(getByText(contentBody))
      expect(dropdownItemClicked).toBeTruthy()
      expect(dropdownIsVisible(rootHtml, dropdownElem)).toBeTruthy()
    })

    it('dropdown closes when DropdownItem is clicked (closeOnClick)', () => {
      // given a dropdown
      const { getByText, toggleElem, dropdownElem } = setup(true)
      const rootHtml = document.getElementsByTagName('html')[0]

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
