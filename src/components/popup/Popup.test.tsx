import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Popup } from './Popup';
import { FUN_BUTTON, SERIOUS_BUTTON } from '../../Constants';
import userEvent from '@testing-library/user-event';

const mockClosePopup = jest.fn();
const mockSeriousButtonClick = jest.fn();
const mockFunButtonClick = jest.fn();
//My only unit tests are here. I wish I had time to do more.
describe('Popup', () => {
    test('displays dialog when open prop is true and closePopup called when the cancel button in the Popup clicked', () => {
        render(<Popup selectedButton={FUN_BUTTON} open={true} closePopup={mockClosePopup} seriousButtonClick={jest.fn()} funButtonClick={jest.fn()} />);
        const buttonCancel = screen.getByText("CANCEL");
        expect(buttonCancel).toBeVisible();
        userEvent.click(buttonCancel);
        expect(mockClosePopup).toBeCalled();
    });
    test('seriousButtonClick called when selected FUN_BUTTON and the OK button in the Popup clicked', () => {
        render(<Popup selectedButton={FUN_BUTTON} open={true} closePopup={mockClosePopup} seriousButtonClick={mockSeriousButtonClick} funButtonClick={jest.fn()} />);
        const buttonOk = screen.getByText("OK");
        userEvent.click(buttonOk);
        expect(mockSeriousButtonClick).toBeCalled();
    });
    test('funButtonClick called when selected SERIOUS_BUTTON and the OK button in the Popup clicked', () => {
        render(<Popup selectedButton={SERIOUS_BUTTON} open={true} closePopup={mockClosePopup} seriousButtonClick={jest.fn()} funButtonClick={mockFunButtonClick} />);
        const buttonOk = screen.getByText("OK");
        userEvent.click(buttonOk);
        expect(mockFunButtonClick).toBeCalled();
    });
    test(`doesn't displays dialog when open prop is false`, () => {
        render(<Popup selectedButton={FUN_BUTTON} open={false} closePopup={jest.fn()} seriousButtonClick={jest.fn()} funButtonClick={jest.fn()} />);
        const popupTitle = screen.queryByText("Do you want to continue?");
        expect(popupTitle).not.toBeInTheDocument();
    });
});