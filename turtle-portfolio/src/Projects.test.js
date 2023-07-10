import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders the correct content', () => {

    render(<About />);
    const aboutElement = screen.getByText(/about me/i);
    expect(aboutElement).toBeInTheDocument();
})