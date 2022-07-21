import { render, screen } from '@testing-library/react'
import Home from '..'

describe('Home', () => {
  it('Renders a Button', () => {
    render(<Home />)
    
    const button = screen.getByRole('button', {
      name: /Coming Soon\!/i,
    })

    expect(button).toBeInTheDocument()
  })
})