function Navbar() {
  return (
    <>
      <div className="navbar w-full h-16 bg-primary text-light flex justify-between items-center px-6">
        <p>Inicio</p>
        <button className="text-xs bg-active w-20 px-4 py-3 hover:bg-button transition-all">
          Acceder
        </button>
      </div>
    </>
  );
}

export default Navbar;
