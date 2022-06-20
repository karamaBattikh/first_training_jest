import React from 'react'
import Modal from './index';
import { render, fireEvent } from '@testing-library/react';

test("Le title devrait s'afficher", () => {
    const { getByText } = render(<Modal title="Bonjour!">karama</Modal>)
    expect(getByText('Bonjour!')).toBeInTheDocument()
})

test('le callback de fermelure est appelé lors du click sur X', () => {
    const mockClose = jest.fn()
    render(<Modal title="Bonjour!" onClose={mockClose}>Modal Content</Modal>);
    const close = document.body.querySelector("[aria-label='Fermer']")
    fireEvent.click(close)
    expect(mockClose.mock.calls.length).toBe(1)
})

test('Le callback de fermeture est appelé avec échap', () => {
    const mockClose = jest.fn();
    render(<Modal title="Bonjour!" onClose={mockClose}>Modal Content</Modal>);
    fireEvent.keyDown(document, { key: "Escape" })
    expect(mockClose.mock.calls.length).toBe(1)
})

test("Le callback de fermeture n'est pas appelé avec une autre touché qu'échap", function () {
    const mockClose = jest.fn()
    render(<Modal title="Bonjour les gens" onClose={mockClose}>Bonjour</Modal>)
    fireEvent.keyDown(document, { key: 'Enter' })
    expect(mockClose.mock.calls.length).toBe(0)
})