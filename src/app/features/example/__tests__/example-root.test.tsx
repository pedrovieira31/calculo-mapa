import { render } from '@testing-library/react'
import { ExampleRoot } from '../views'

describe('ExampleRoot', () => {
  const renderComponent = () =>
    render(
      <ExampleRoot>
        <h1>Hello World!</h1>
      </ExampleRoot>
    )

  it('Should render correctly', () => {
    renderComponent()
  })
})
