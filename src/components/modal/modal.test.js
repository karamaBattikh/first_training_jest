import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import Modal from './index';

test("Le title devrait s'afficher", () => {
  render(<Modal title="Bonjour!">karama</Modal>);
  expect(screen.getByText('Bonjour!')).toBeInTheDocument();
});

test('le callback de fermelure est appelé lors du click sur X', () => {
  const mockClose = jest.fn();
  render(
    <Modal title="Bonjour!" onClose={mockClose}>
      Modal Content
    </Modal>
  );
  const close = screen.getByTestId('close');
  fireEvent.click(close);
  // La fonction simulée est appelée = 1
  expect(mockClose.mock.calls.length).toBe(1);
});

test('Le callback de fermeture est appelé avec échap', () => {
  const mockClose = jest.fn();
  render(
    <Modal title="Bonjour!" onClose={mockClose}>
      Modal Content
    </Modal>
  );
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(mockClose.mock.calls.length).toBe(1);
});

test("Le callback de fermeture n'est pas appelé avec une autre touché qu'échap", function () {
  const mockClose = jest.fn();
  render(
    <Modal title="Bonjour les gens" onClose={mockClose}>
      Bonjour
    </Modal>
  );
  fireEvent.keyDown(document, { key: 'Enter' });
  expect(mockClose.mock.calls.length).toBe(0);
});
