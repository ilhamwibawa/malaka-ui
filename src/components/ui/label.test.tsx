import '@testing-library/jest-dom/matchers'
import { render, screen } from "@testing-library/react"
import * as React from "react"
import { describe, expect, it, } from 'vitest'

import { Label } from './label'

describe("Label component", () => {
  it("should render a label element", () => {
    render(<Label>Email</Label>)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it("should render a label element with a htmlFor attribute", () => {
    render(<Label htmlFor="email">Email</Label>)
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
  })

  it("should render a label element with a htmlFor attribute and a text", () => {
    render(<Label htmlFor="email">Email</Label>)
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
    expect(screen.getByText('Email')).toBeInTheDocument()
  })
})