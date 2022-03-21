import React from 'react';
import BottomNav from './BottomNav/BottomNav';
import TopNav from './TopNav/TopNav';

function Header() {
  return (
    <div className="header">
      <TopNav />
      <BottomNav />
    </div>
  );
}

export default Header;
