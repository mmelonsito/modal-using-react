import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';
import { act } from 'react-dom/test-utils';

it('Page with only one button', () => {
    render(<App />, );
    expect(screen.queryByText(/show modal/i)).toBeInTheDocument();
});

it('Page with the modal opened', () => {
    render(<App />, );

    const button = screen.queryByText("Show modal");
    fireEvent.click(button);
    expect(screen.queryByText(/Míriam/i)).toBeInTheDocument();
});

it('State show changed', () => {
    const showModal = jest.fn();
    act(() => {
        render(<App showModal={showModal} />, );
    });
    
    const button = screen.queryByText("Show modal");

    //act(() => {
    //    button.dispatchEvent(new MouseEvent("click"));
    //});
    fireEvent.click(button);
    
    expect(showModal).toHaveBeenCalledTimes(1);
});