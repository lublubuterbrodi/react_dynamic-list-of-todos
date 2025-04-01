import React from 'react';
import classNames from 'classnames';

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
  return (
    <div className="field is-grouped">
      <div className="control">
        <div className="select">
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            data-cy="filter-status"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="control">
        <input
          type="text"
          className="input"
          placeholder="Search todos..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          data-cy="search-input"
        />
      </div>

      <div className="control">
        <button
          className={classNames('button', {
            'is-primary': filterStatus === 'active',
            'is-success': filterStatus === 'completed',
            'is-light': filterStatus === 'all',
          })}
          onClick={() => setFilterStatus('all')}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
