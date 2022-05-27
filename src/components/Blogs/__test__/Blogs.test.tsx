import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import Blogs from '../Blogs'
import { store } from '../../../redux/store'


const MockBlog = () => {
    return(
        <Provider store={store}>
            <Blogs />
        </Provider>
    )
};


it('render Blogs', async () => {
    render(
        <MockBlog />
    );

    const blog = await screen.findByText(/loading../i);
    expect(blog).toBeInTheDocument();
});