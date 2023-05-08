import {
    render, screen
}
from '@testing-library/react';
import {
    MemoryRouter
}
from 'react-router-dom';
import Profile from './Profile';

describe('Profile', () => { it('renders login page', () => { render(<MemoryRouter> <Profile/> </MemoryRouter>); }); });
