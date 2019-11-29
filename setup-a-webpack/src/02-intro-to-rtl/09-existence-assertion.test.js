import React from 'react'
import {render} from '@testing-library/react'


const MyList = () => (
  <ul>
    <li>React</li>
    <li>Redux</li>
  </ul>
)


describe('[Existence assertion]', ()=>{
  let getByText, queryByText

  beforeEach(()=>{
    const rendered = render(<MyList/>)
    getByText = rendered.getByText
    queryByText = rendered.queryByText
  })

  describe('[Existence]', ()=>{
    it('Example of asserting text exist', ()=>{
      expect(getByText('React')).toBeTruthy()
    })

    it('[Short cut] There is no need to use "expect().toBeTruthy()" to assert existence', ()=>{
      getByText('React')

      // Because the above return the found node
      const returnType_getByText = Object.prototype.toString.call(getByText('React'))
      expect(returnType_getByText).toBe('[object HTMLLIElement]')
    })
  })

  describe('[Non-existence]', ()=>{
    // assert that the text "Angular" does not exist in the component

    it('non existence will throw when using "getBy*"', ()=>{
      expect(()=>{
        getByText('Angular')
      }).toThrow()
    })

    it('This is how you assert non-existing text', ()=>{
      expect( queryByText('Angular') ).toBeFalsy()
    })


    it('[Gotcha!] must use "expect( queryBy*(needInHaystack) ).toBeFalsy()" with "queryBy*" to assert non-existing', ()=>{
      queryByText('Angular') // <---- would give false positive
      expect(null).toBe(null)

     /*

     Here is a summry for the differences between
     "getBy*" and "queryBy*"


                 │ No Match  │ 1 Match   │ 1+ Match
     ────────────┼───────────┼───────────┼───────────
        getBy    │ throw     │ return    │ throw
        queryBy  │ null      │ return    │ throw
     ────────────┼───────────┼───────────┼───────────

     */
    })
  })
})








