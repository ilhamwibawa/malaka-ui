import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button';

describe('Button Component', () => {
  it('renders the button with correct text', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // test variants
  it('renders the button with the outline variant', () => {
    render(<Button variant="outline">Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground');
  });

  // test sizes
  it('renders the button with the lg size', () => {
    render(<Button size="lg">Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('h-10 rounded-md px-8');
  });
});