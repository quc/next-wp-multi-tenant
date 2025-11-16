import Button from "./Button";

interface NavigationProps {
  logo?: string;
  menuItems?: string[];
  showSearch?: boolean;
}

export default function Navigation({
  logo = "TubeKarma",
  menuItems = ["Home", "Videos", "About", "Contact"],
  showSearch = true,
}: NavigationProps) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">{logo}</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          {showSearch && (
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="primary" size="sm">
                Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

