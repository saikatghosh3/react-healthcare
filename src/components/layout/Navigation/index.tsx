import React from 'react';
import { SecondaryNav } from './SecondaryNav';
import { MainNav } from './MainNav';

export const Navigation = () => {
  return (
    <div className="fixed w-full top-0 z-50">
      <SecondaryNav />
      <MainNav />
    </div>
  );
};