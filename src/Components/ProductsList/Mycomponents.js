import React, { lazy, Suspense } from 'react';


const ProductList = lazy(() => import('./ProductList'));
const MyComponents = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>

  )
}

export default MyComponents