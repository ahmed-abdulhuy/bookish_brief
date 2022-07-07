import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import Books from '../Books'
import { store } from '../../../redux/store'


const MockBlog = () => {
    return(
        <Provider store={store}>
            <Books />
        </Provider>
    )
};


it('render Books', async () => {
    render(
        <MockBlog />
    );

    const blog = await screen.findByText(/loading../i);
    expect(blog).toBeInTheDocument();
});