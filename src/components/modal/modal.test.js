import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import Modal from './index';

describe('Modal test', () => {
  test('the title must be in the screen when isShowing', () => {
    render(
      <Modal isShowing={true} title="Bonjour!">
        karama
      </Modal>
    );
    expect(screen.getByText('Bonjour!')).toBeInTheDocument();
  });

  test("the title must not be in the screen when isShowing: false", async () => {
    render(<Modal title="Bonjour!">karama</Modal>);

    expect(screen.queryByTestId('modal')).toBeNull();
  });

  test('the closing callback is called when clicking on X', () => {
    const mockClose = jest.fn();
    render(
      <Modal isShowing={true} title="Bonjour!" onClose={mockClose}>
        Modal Content
      </Modal>
    );
    const close = screen.getByTestId('close');
    fireEvent.click(close);
    // La fonction simulée est appelée = 1
    expect(mockClose.mock.calls.length).toBe(1);
  });

  test('The closing callback is called with escape', () => {
    const mockClose = jest.fn();
    render(
      <Modal isShowing={true} title="Bonjour!" onClose={mockClose}>
        Modal Content
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockClose.mock.calls.length).toBe(1);
  });

  test("The closing callback is not called with any keystroke other than escape", function () {
    const mockClose = jest.fn();
    render(
      <Modal isShowing={true} title="Bonjour les gens" onClose={mockClose}>
        Bonjour
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Enter' });
    expect(mockClose.mock.calls.length).toBe(0);
  });

  test('the modal must be closed when clicked outside', () => {
    const mockClose = jest.fn();
    render(
      <Modal isShowing={true} title="Bonjour les gens" onClose={mockClose}>
        Bonjour
      </Modal>
    );
    fireEvent.click(document);
    expect(mockClose).toBeCalled();
  });
});
