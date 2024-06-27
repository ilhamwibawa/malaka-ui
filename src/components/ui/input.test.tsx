import '@testing-library/jest-dom/matchers'
import { render, screen } from "@testing-library/react"
import * as React from "react"
import { describe, expect, it, } from 'vitest'

import { Input } from "./input"

describe("Input component", () => {
  it("should render an input element", () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it("should render an input element with a placeholder", () => {
    render(<Input placeholder="Email" />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it("should render an input element with a type", () => {
    render(<Input type="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')
  })

  it("should render a disabled input element", () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it("should render a file input element", () => {
    render(<Input type="file" role="tree" />)
    expect(screen.getByRole('tree')).toHaveAttribute('type', 'file')
  })

  it("should render an input element with a label", () => {
    render(
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" id="email" />
      </div>
    )
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it("should render an input element with a label and a placeholder", () => {
    render(
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" id="email" />
      </div>
    )
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it("should render an input element with a label and a type", () => {
    render(
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" id="email" />
      </div>
    )
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')
  })
})