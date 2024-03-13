import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({
  tarefas,
  handleEdit,
  handleDelete,
}) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <button type="submit">
              <FaEdit
                onClick={(e) => handleEdit(e, index)}
                className="edit"
              />
            </button>
            <button type="submit">
              <FaWindowClose
                onClick={(e) => handleDelete(e, index)}
                className="delete"
              />
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
