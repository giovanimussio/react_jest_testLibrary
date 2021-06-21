import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button',{name:'Change to blue'})
  //expect the background to be red
  expect(colorButton).toHaveStyle({background: 'red'})
});

test('button turns blue when clicked', () => {
  render(<App/>); //Here is create a virtual dom of the file App

  const colorButton = screen.getByRole('button',{name:'Change to blue'})
  //Click on the button
  fireEvent.click(colorButton)
  //expect the backgorund color to be blue
  expect(colorButton).toHaveStyle({background:'blue'});
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions',()=>{
  render(<App/>);

  //check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  //check that the checkbox starts out unchecked

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});