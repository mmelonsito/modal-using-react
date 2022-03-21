import React from 'react';
import {fireEvent, screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Modal from '../Modal';

it("Should not render the modal", () => {
    const { queryByTestId  } = render(<Modal show={false}/>)
    expect(queryByTestId('pruebame')).toBeNull();
});

it('Should render the modal', () => {
    const { getByTestId  } = render(<Modal show={true} />)
    expect(getByTestId('pruebame')).toHaveTextContent("Modal Window")
});