import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default RootLayout;