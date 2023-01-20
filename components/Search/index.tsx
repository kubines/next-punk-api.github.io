import clsx from 'clsx';

import { SearchProps } from './types';

export function Search({
  value,
  onChange,
  onClear,
  className,
}: SearchProps) {
  return (
    <div className="input-group">
      <input
        type="text"
        className={clsx('form-control', className)}
        placeholder="Enter Beer Name" 
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      />
      {onClear && (
        <button
          className="btn btn-outline-secondary" 
          type="button"
          onClick={onClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}
