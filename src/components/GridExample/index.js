import React from 'react'
import { number, string } from 'prop-types'
import cn from 'classnames'

const GridExample = () => {

  return (
    <div className="container grid-example">
      <div class="row align-items-center">
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-md">
          <div className="grid-example-block"></div>
        </div>
      </div>


      <div class="row align-items-center">
        <div class="col-sm-12 col-md-4">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div className="grid-example-block"></div>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-6">
          <div className="grid-example-block"></div>
        </div>
        <div class="col-6">
          <div className="grid-example-block"></div>
        </div>
      </div>
    </div>

  )
}

GridExample.propTypes = {
  className: string,
}

export default GridExample
