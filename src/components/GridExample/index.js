import React from 'react'

const styles = {
  background: '#ccc',
  width: '100%',
  height: '64px',
  border: '1px solid #929093',
}

const GridExample = () => (
  <div className='container grid-example'>
    <div className='row align-items-center'>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-md'>
        <div className='grid-example-block' style={styles}></div>
      </div>
    </div>


    <div className='row align-items-center'>
      <div className='col-sm-12 col-md-4'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-sm-12 col-md-4'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-sm-12 col-md-4'>
        <div className='grid-example-block' style={styles}></div>
      </div>
    </div>

    <div className='row align-items-center'>
      <div className='col-6'>
        <div className='grid-example-block' style={styles}></div>
      </div>
      <div className='col-6'>
        <div className='grid-example-block' style={styles}></div>
      </div>
    </div>
  </div>
)

export default GridExample
