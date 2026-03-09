import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="h-screen w-screen min-w-0 min-h-0 bg-gray-50">
      <Outlet />
    </div>
  );
};

export default RootLayout;