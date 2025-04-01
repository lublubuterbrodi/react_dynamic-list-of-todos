import React, { ChangeEvent } from 'react';

type Props = {
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const TodoFilter: React.FC<Props> = ({
  filterStatus,
  setFilterStatus,
  searchQuery,
  setSearchQuery,
}) => {
  return React.createElement(
    'form',
    { className: 'field has-addons' },
    React.createElement(
      'p',
      { className: 'control' },
      React.createElement(
        'span',
        { className: 'select' },
        React.createElement(
          'select',
          {
            'data-cy': 'statusSelect',
            value: filterStatus,
            onChange: (event: ChangeEvent<HTMLSelectElement>) =>
              setFilterStatus(event.target.value),
          },
          React.createElement('option', { value: 'all' }, 'All'),
          React.createElement('option', { value: 'active' }, 'Active'),
          React.createElement('option', { value: 'completed' }, 'Completed'),
        ),
      ),
    ),
    React.createElement(
      'p',
      { className: 'control is-expanded has-icons-left has-icons-right' },
      React.createElement('input', {
        'data-cy': 'searchInput',
        type: 'text',
        className: 'input',
        placeholder: 'Search...',
        value: searchQuery,
        onChange: (event: ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value),
      }),
      React.createElement(
        'span',
        { className: 'icon is-left' },
        React.createElement('i', { className: 'fas fa-magnifying-glass' }),
      ),
      searchQuery &&
        React.createElement(
          'span',
          { className: 'icon is-right', style: { pointerEvents: 'all' } },
          React.createElement('button', {
            'data-cy': 'clearSearchButton',
            type: 'button',
            className: 'delete',
            onClick: () => setSearchQuery(''),
          }),
        ),
    ),
  );
};
