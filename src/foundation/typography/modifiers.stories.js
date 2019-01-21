import React from 'react'

import CodeExample from '../../utils/CodeExample'


const Modifiers = () =>
  <div className='container'>
    <div className='example__heading'>
      <h1 className='mc-text-h1'>Modifiers</h1>
      <p className='mc-text--muted'>All available text modifier classes.</p>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--uppercase</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--uppercase'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--airy</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--airy'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--hinted mc-text--monospace'>.mc-text--hinted</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--hinted'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--muted</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--muted'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--silenced</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--silenced'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--bold</p>
      <CodeExample>
        <p className='mc-text-large mc-text--bold'>
          The quick brown fox jumped over the lazy dog.
        </p>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--2-lines</p>
      <CodeExample>
        <p>
          The examples below should wrap to a maximum of two lines,
          even when the window is resized. The sample text used is much longer
          than 2 lines for demonstrative purposes.
        </p>

        <hr />

        <div className='row'>
          <div className='col-5'>
            <h4 className='mc-text-h4 mc-text--2-lines'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-5'>
            <p className='mc-text--2-lines'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-5'>
            <p className='mc-text-large mc-text--2-lines'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </div>
        </div>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--3-lines</p>
      <CodeExample>
        <p>
          The examples below should wrap to a maximum of three lines,
          even when the window is resized. The sample text used is much longer
          than 3 lines for demonstrative purposes.
        </p>

        <hr />

        <div className='row'>
          <div className='col-5'>
            <h4 className='mc-text-h4 mc-text--3-lines'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-5'>
            <p className='mc-text--3-lines'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-5'>
            <p className='mc-text-large mc-text--3-lines'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </div>
        </div>
      </CodeExample>
    </div>


    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--normal</p>
      <CodeExample>
        <p className='mc-text-large mc-text--normal'>
          The quick brown fox jumped over the lazy dog.
        </p>
      </CodeExample>
    </div>
  </div>


export default Modifiers
