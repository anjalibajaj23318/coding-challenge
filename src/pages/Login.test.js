import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Login from './Login';

describe('Login', () => {
    it('renders login page', () => {
        render (<MemoryRouter>
            <Login/>
        </MemoryRouter>);
    });
});
