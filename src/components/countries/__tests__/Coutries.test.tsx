import { findByTestId, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Countries } from '../Countries';
import { BrowserRouter, MemoryRouter, Routes } from 'react-router-dom';
import { fakeFavoriteCities } from 'mocks/fakeData';

describe('Countries test', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify(fakeFavoriteCities)),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  test('component renders', async () => {
    render(
      <MemoryRouter>
        <Countries />
      </MemoryRouter>
    );

    const component = await screen.findByTestId('countries');

    expect(component).toBeInTheDocument();

    const sections = await screen.findAllByTestId('cards-section');
    expect(sections.length).toBe(3);
  });
});
