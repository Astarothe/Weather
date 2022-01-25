import React from 'react';
import loader from '../../assets/image/loader.svg';

export function Loader() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
    }}
    >
      <img src={loader} alt="her" />
    </div>
  );
}
