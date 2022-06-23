import {  fireEvent} from '@testing-library/react';
import { renderHook} from '@testing-library/react-hooks';
 
import useClickOutSide from '.';

describe('useClickOutSide', ()=> {
  test('should handle outside click', ()=> {
    const content = document.createElement('div');
    document.body.appendChild(content);

    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const ref = {
      current: content
    }
    const mockFn = jest.fn();
    renderHook(()=>useClickOutSide(ref, mockFn));
    expect(mockFn).toHaveBeenCalledTimes(0);
    
    fireEvent.click(outside);
    expect(mockFn).toHaveBeenCalledTimes(1)
  })


  test('should do nothing after click on the target element', ()=> {
    const content = document.createElement('div');
    document.body.appendChild(content);

    const ref = {
      current: content
    }
    const mockFn = jest.fn();

    renderHook(()=>useClickOutSide(ref, mockFn));
    expect(mockFn).toHaveBeenCalledTimes(0);

    fireEvent.click(content);
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})


