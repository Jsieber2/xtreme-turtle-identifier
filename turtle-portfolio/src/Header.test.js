import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the correct header', () => {
    render(<Header />);
    const headerElement = screen.getByText(/about/i);
    expect(headerElement).toBeInTheDocument();
});
