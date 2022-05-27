import { render, screen } from '@testing-library/react'
import Footer from '../Footer'


it('renders Footer', () => {
    render(<Footer />);
    const footerElement = screen.getByText('Footer');
    expect(footerElement).toBeInTheDocument();
});