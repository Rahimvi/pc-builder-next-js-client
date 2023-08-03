import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <span className="text-white font-bold text-lg">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/pc-builder">
              <span className="text-white font-bold text-lg">PC Builder</span>
            </Link>
          </li>
          <li className="relative group">
            <span className="text-white font-bold text-lg cursor-pointer group-hover:text-blue-300">
              Categories
            </span>
            <ul className="absolute z-10 bg-blue-500 border border-blue-300 py-2 space-y-2 hidden group-hover:block">
              <li>
                <Link href="/category/cpu">
                  <span className="text-white hover:text-blue-300">
                    CPU / Processor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/motherboard">
                  <span className="text-white hover:text-blue-300">
                    Motherboard
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/ram">
                  <span className="text-white hover:text-blue-300">RAM</span>
                </Link>
              </li>
              <li>
                <Link href="/categories/psu">
                  <span className="text-white hover:text-blue-300">
                    Power Supply Unit
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/storage">
                  <span className="text-white hover:text-blue-300">
                    Storage Device
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/monitor">
                  <span className="text-white hover:text-blue-300">
                    Monitor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/category/others">
                  <span className="text-white hover:text-blue-300">Others</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
