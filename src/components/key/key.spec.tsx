import { screen, render } from '@testing-library/react';
import Key from './key';


describe('Given the component Key', () => {

    const mockKey = {

        className: 'test className',

        label: 'test label',

    };



    describe('When calling it', () => {

        test('Then it should render', () => {

            //Arrange & Act

            render(<Key className={mockKey.className} label={mockKey.label} />);

            const labelInput = screen.getByText(/label/i);

            //Assert

            expect(labelInput).toBeInTheDocument();

        });

    });

});
