import React from 'react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'


const Modifiers = () =>
  <div className='container'>
    <DocHeader
      title='Typography - Modifiers'
      description='Create unique headers and body copy by combining modifiers.'
    />

    <DocSection title='Treatment'>
      <PropExample name='.mc-text--uppercase'>
        <h6 className='mc-text-h5 mc-text--uppercase'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </PropExample>

      <PropExample name='.mc-text--lowercase'>
        <h6 className='mc-text-h5 mc-text--lowercase'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </PropExample>

      <PropExample name='.mc-text--capitalize'>
        <h6 className='mc-text-h5 mc-text--capitalize'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </PropExample>

      <PropExample name='.mc-text--airy'>
        <h6 className='mc-text-h5 mc-text--airy'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </PropExample>

      <PropExample name='.mc-text--link / .mc-text--bare-link'>
        <p className='mc-text-large'>
          The quick
          {' '}
          <a className='mc-text--link'>brown fox</a>
          {' '}
          jumped over the
          {' '}
          <a className='mc-text--bare-link'>lazy dog</a>.
          {' '}
          <a>And this is an anchor without any classes.</a>
        </p>
      </PropExample>
    </DocSection>

    <DocSection
      title='Alignment'
      description='Modifier classes to aid you in text alignment.'
    >
      <div className='row'>
        <div className='col-md-4'>
          <PropExample name='.mc-text--left'>
            <p className='mc-text--left'>The quick brown</p>
          </PropExample>
        </div>

        <div className='col-md-4'>
          <PropExample name='.mc-text--center'>
            <p className='mc-text--center'>fox jumped over</p>
          </PropExample>
        </div>

        <div className='col-md-4'>
          <PropExample name='.mc-text--right'>
            <p className='mc-text--right'>the lazy dog.</p>
          </PropExample>
        </div>

        <div className='col-12'>
          <PropExample name='.mc-text--center.mc-text-md--left'>
            <p className='mc-text--center mc-text-md--left'>
              The quick brown fox jumped over the lazy dog.
            </p>
          </PropExample>
        </div>
      </div>
    </DocSection>

    <DocSection
      title='Weight'
    >
      <p className='mc-mb-8'>
        Font weights should default to whatever the inherited value is from
        the type classes, but can be overridden if required.
      </p>

      <div className='row'>
        <div className='col-6'>
          <PropExample name='.mc-text--bold'>
            <p className='mc-text--bold'>This sets the font weight to 700.</p>
          </PropExample>
        </div>

        <div className='col-6'>
          <PropExample name='.mc-text--italic'>
            <p className='mc-text--italic'>This sets the font style to italic.</p>
          </PropExample>
        </div>

        <div className='col-6'>
          <PropExample name='.mc-text--normal'>
            <p className='mc-text--normal'>This sets the font weight to 400.</p>
          </PropExample>
        </div>

        <div className='col-6'>
          <PropExample name='.mc-text--light'>
            <p className='mc-text--light'>This sets the font weight to 300.</p>
          </PropExample>
        </div>
      </div>
    </DocSection>

    <DocSection
      title='Lines'
    >
      <p className='mc-mb-8'>
        This helper brings consistency to block heights. It even
        works when the window is resized. The sample text used is much longer
        than number of lines needed for demonstrative purposes. The main
        differences between
        <span className='mc-code'>--1-line</span>
        and <span className='mc-code'>--1-line-max</span> is whether the space
        the text occupies is collapsed or not.  You can see an example in the
        <span className='mc-code'>--2-lines</span> section of each example
        below.
      </p>

      <div className='row'>
        <div className='col-4'>
          <PropExample name='.mc-text--1-line'>
            <h4 className='mc-text-h4 mc-text--1-line mc-mb-4'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>

            <p className='mc-text--1-line mc-mb-4'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>

            <p className='mc-text-large mc-text--1-line'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </PropExample>
        </div>

        <div className='col-4'>
          <PropExample name='.mc-text--2-lines'>
            <p className='mc-text-large mc-text--2-lines'>
              This holds two lines of space.
            </p>

            <h4 className='mc-text-h4 mc-text--2-lines mc-mb-4'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>

            <p className='mc-text--2-lines mc-mb-4'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>

            <p className='mc-text-large mc-text--2-lines'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </PropExample>
        </div>

        <div className='col-4'>
          <PropExample name='.mc-text--3-lines'>
            <p className='mc-text-large mc-text--3-lines'>
              This holds three lines of space.
            </p>

            <h4 className='mc-text-h4 mc-text--3-lines mc-mb-4'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>

            <p className='mc-text--3-lines mc-mb-4'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>

            <p className='mc-text-large mc-text--3-lines'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </PropExample>
        </div>
      </div>

      <div className='row'>
        <div className='col-4'>
          <PropExample name='.mc-text--1-line-max'>
            <h4 className='mc-text-h4 mc-text--1-line-max mc-mb-4'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>

            <p className='mc-text--1-line-max mc-mb-4'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>

            <p className='mc-text-large mc-text--1-line-max'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </PropExample>
        </div>

        <div className='col-4'>
          <PropExample name='.mc-text--2-lines-max'>
            <p className='mc-text-large mc-text--2-lines-max'>
              This line collapses.
            </p>

            <h4 className='mc-text-h4 mc-text--2-lines-max mc-mb-4'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>

            <p className='mc-text--2-lines-max mc-mb-4'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>

            <p className='mc-text-large mc-text--2-lines-max'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </PropExample>
        </div>

        <div className='col-4'>
          <PropExample name='.mc-text--3-lines-max'>
            <p className='mc-text-large mc-text--3-lines-max'>
              This line collapses.
            </p>

            <h4 className='mc-text-h4 mc-text--3-lines-max mc-mb-4'>
              This is a heading: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </h4>

            <p className='mc-text--3-lines-max mc-mb-4'>
              This is body text: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>

            <p className='mc-text-large mc-text--3-lines-max'>
              This is mc-text-large: Four score and seven years ago our
              fathers brought forth on this continent, a new nation,
              conceived in Liberty, and dedicated to the proposition
              that all men are created equal.
            </p>
          </PropExample>
        </div>
      </div>
    </DocSection>

    <DocSection
      title='Flourishes'
      description=
      {
        `Fancy treatments for your typography. <br />
        If the containing element is too narrow to accomodate the flourish,
        it will gracefully disappear.`
      }
    >

      <PropExample name='.mc-text-hr'>
        <div className='row'>
          <div className='col-sm-4'>
            <p className='mc-text-hr mc-text--uppercase'>
            <span>The</span>
            </p>
          </div>

          <div className='col-sm-4'>
            <p className='mc-text-hr mc-text--uppercase'>
              <span>Text</span>
            </p>
          </div>

          <div className='col-sm-4'>
            <p className='mc-text-hr mc-text--uppercase'>
              <span>Can be any length</span>
            </p>
          </div>

          <div className='col-12'>
            <p className='mc-text-hr mc-text--uppercase'>
              <span>That you would like to use</span>
            </p>
          </div>
        </div>
      </PropExample>
    </DocSection>
  </div>


export default withAddons({
  path: 'foundation/typography/modifiers.stories.js',
})(() => <Modifiers />)
