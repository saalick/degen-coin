
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { user, signOut } = useAuth();

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/degen-shrink', label: 'degenshrink' },
    { path: '/confessions', label: 'confess' },
    { path: '/breathing', label: 'breathe' },
    { path: '/metrics', label: 'metrics' },
    { path: '/chat', label: 'chat' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-600 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <img 
            src="https://i.ibb.co/qLS81x2z/EED5-D5-FC-5-BC8-4-E42-85-B8-1-ADE6-CA97682-2.jpg" 
            alt="DegenTerminal Logo" 
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="terminal-text hover:text-gray-300 transition-colors duration-200 relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="text-gray-400">/</span>
                <span 
                  className={hoveredItem === item.label ? 'animate-glitch' : ''}
                  data-text={item.label}
                >
                  {item.label}
                </span>
                {hoveredItem === item.label && <span className="cursor"></span>}
              </Link>
            ))}
          </div>
          
          <div className="border-l border-gray-600 pl-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="terminal-text text-gray-400 text-sm">
                  /logged_in
                </span>
                <Button
                  onClick={signOut}
                  variant="outline"
                  size="sm"
                  className="terminal-button text-xs"
                >
                  /logout
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="terminal-button text-xs">
                  /login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
