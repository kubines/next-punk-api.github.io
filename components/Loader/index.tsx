import React from 'react';

export function Loader() {
  return (
    <div className="d-flex h-100 w-100 justify-content-center align-items-center">
      <div className="spinner-border m-5 p-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>

  );
}
