import { screen, render } from '@testing-library/react';
import Key from './key';


describe('Given the component Key', () => {

    const mockKey = {

        value: '1'

    };



    describe('When calling it', () => {

        test('Then it should render', () => {

            //Arrange & Act

            render(<Key value={mockKey.value} />);

            const value = screen.getByText(/1/i);

            //Assert

            expect(value).toBeInTheDocument();

        });

    });

});
