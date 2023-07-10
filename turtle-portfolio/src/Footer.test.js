import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the correct content', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Josef sieber/i);
    expect(footerElement).toBeInTheDocument();
})