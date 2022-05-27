import { render, screen } from '@testing-library/react'
import Header from '../Header'


it('renders Header', () => {
    render(<Header />);
    const headerElement = screen.getByText('Header');
    expect(headerElement).toBeInTheDocument();
});