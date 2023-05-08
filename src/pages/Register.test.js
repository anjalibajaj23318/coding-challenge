import {
    render, screen
}
from '@testing-library/react';
import {
    MemoryRouter
}
from 'react-router-dom';
import Register from './Register';

describe('Register', () => {
    it('renders Register page', () => {
        render(<MemoryRouter>
            <Register />
        </MemoryRouter>);
    });
});

