import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { expect, test, beforeEach, vi } from 'vitest';
import Ejercicio9 from './Ejercicio9';

beforeEach(() => {
  window.localStorage.clear();
  cleanup();
});

test('Full workflow: add, toggle, move to completed, and delete with persistence', () => {
  const { unmount } = render(<Ejercicio9 />);

  const titleInput = screen.getByPlaceholderText(/¿Qué hay que hacer?/i);
  const descInput = screen.getByPlaceholderText(/Añade una descripción/i);
  const addBtn = screen.getByText(/Agregar Tarea/i);

  // 1. Add multiple tasks
  fireEvent.change(titleInput, { target: { value: 'Learn Testing' } });
  fireEvent.change(descInput, { target: { value: 'Master Vitest' } });
  fireEvent.click(addBtn);

  fireEvent.change(titleInput, { target: { value: 'Build Portfolio' } });
  fireEvent.click(addBtn);

  expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  expect(screen.getByText('Build Portfolio')).toBeInTheDocument();

  // 2. Test Toggle and Move to Completed
  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[0]); // Check first task
  
  const completeBtn = screen.getByText(/Marcar como Completadas/i);
  fireEvent.click(completeBtn);
  
  const taskInCompleted = screen.getByText('Learn Testing');
  expect(taskInCompleted).toHaveClass('text-success');

  // 3. Test Persistence (LocalStorage)
  unmount();
  render(<Ejercicio9 />);
  
  expect(screen.getByText('Build Portfolio')).toBeInTheDocument();
  expect(screen.getByText('Learn Testing')).toBeInTheDocument(); 

  // 4. Test Deletion
  const deleteCheckboxes = screen.getAllByRole('checkbox');
  fireEvent.click(deleteCheckboxes[1]); 
  const deleteBtn = screen.getByText(/Eliminar Seleccionadas/i);
  fireEvent.click(deleteBtn);

  expect(screen.queryByText('Learn Testing')).not.toBeInTheDocument();
});