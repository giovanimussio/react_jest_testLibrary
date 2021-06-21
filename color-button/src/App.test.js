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
  expect(colorButton.textContent).toBe(' Change to red ');
});

test('initial conditions',() => {
  render(<App/>);

  //check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  //check that the checkbox starts out unchecked

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('initial condtions with checkbox',()=>{
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'} );
  //check the button initial condition
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
  
  //check the button after the click
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();
  
})

test('Disabled button has gray background and reverts to red', ()=>{
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'} );

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background : gray');
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background : red');
})

test('Disabled button has gray background and reverts to blue', ()=>{
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'} );

  //change color to blue
  fireEvent.click(colorButton);
  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background : gray');
  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background : blue');
})