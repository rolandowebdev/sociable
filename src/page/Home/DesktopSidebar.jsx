import { Sidebar } from '../../components';

function DesktopSidebar({ user }) {
  return (
    <div className="flex-initial hidden h-screen md:flex">
      <Sidebar user={user && user} />
    </div>
  );
}

export default DesktopSidebar;
