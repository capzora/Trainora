// LoadingSkeleton.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <Skeleton height={40} width="80%" />
      <Skeleton height={200} />
      <Skeleton height={40} width="50%" />
    </div>
  );
};

export default LoadingSkeleton;
