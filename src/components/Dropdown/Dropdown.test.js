import React from 'react'
import { render } from '@testing-library/react'
import { Dropdown, DropdownToggle, DropdownContent } from '../index'

describe('Dropdown', () => {
  /*
  const setup = () => {
    return render(<Dropdown>
      <DropdownToggle>Click to Toggle</DropdownToggle>
      <DropdownContent>Some Content</DropdownContent>
    </Dropdown>)
  }
  */

  it('renders default dropdown with popper', () => {
    render(<Dropdown>
      <DropdownToggle>Click to Toggle</DropdownToggle>
      <DropdownContent>Some Content</DropdownContent>
    </Dropdown>)
  })
})
