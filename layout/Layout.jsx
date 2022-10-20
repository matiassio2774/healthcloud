
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from './../components/Navbar/Navbar';

function Layout({ children }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="flex w-full">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="px-10 py-8 bg-gray-100 ">
            <div className="component-container w-full bg-white shadow-lg px-8 py-6">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
