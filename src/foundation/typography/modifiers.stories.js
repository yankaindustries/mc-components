import React from 'react'

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

      <PropExample name='.mc-text--airy'>
        <h6 className='mc-text-h5 mc-text--airy'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </PropExample>

      <PropExample name='.mc-text--link / .mc-text--naked-link'>
        <p className='mc-text-large'>
          The quick
          {' '}
          <a className='mc-text--link'>brown fox</a>
          {' '}
          jumped over the
          {' '}
          <a className='mc-text--naked-link'>lazy dog</a>.
        </p>
      </PropExample>
    </DocSection>

    <DocSection title='Color'>
      <div className='row'>
        <div className='col-md-4'>
          <PropExample name='.mc-text--hinted'>
            <h6 className='mc-text-h5 mc-text--hinted'>
              The quick brown fox jumped over the lazy dog.
            </h6>
          </PropExample>
        </div>

        <div className='col-md-4'>
          <PropExample name='.mc-text--muted'>
            <h6 className='mc-text-h5 mc-text--muted'>
              The quick brown fox jumped over the lazy dog.
            </h6>
          </PropExample>
        </div>

        <div className='col-md-4'>
          <PropExample name='.mc-text--silenced'>
            <h6 className='mc-text-h5 mc-text--silenced'>
              The quick brown fox jumped over the lazy dog.
            </h6>
          </PropExample>
        </div>
      </div>
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
            <p className='mc-text--center mc-text-md--left'>The quick brown fox jumped over the lazy dog.</p>
          </PropExample>
        </div>
      </div>
    </DocSection>

    <DocSection
      title='Lines'
      description={`
        We can max the number of lines a paragraph will have so that it better
        fits smaller areas, and brings consistency to block heights. It even
        works when the window is resized. The sample text used is much longer
        than number of lines needed for demonstrative purposes.
      `}
    >
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
    </DocSection>

    <DocSection
      title='Flourishes'
      description={`
        Fancy treatments for your typography. <br />
        If the containing element is too narrow to accomodate the flourish,
        it will gracefully disappear.
      `}>

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


export default Modifiers
