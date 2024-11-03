// Navbar.jsx
import React from 'react';
import Logo from './app.png'; // Ensure your logo file path is correct

// CSS for the glow animation
const styles = `
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 0, 0, 1), 0 0 25px rgba(255, 0, 0, 0.9), 0 0 35px rgba(255, 0, 0, 0.7);
  }
}
`;

function Navbar() {
  return (
    <>
      <style>{styles}</style>
      <div className="relative z-10 w-full px-10 py-4 flex justify-between items-center bg-zinc-800 text-white rounded-lg">
        <div className="logo flex items-center">
          <img src={Logo} alt="Logo" className="h-20 w-auto mr-4" />
          
        </div>
        <div className="links flex gap-8">
          {["Dashboard", "Goals", "Leaderboard", "Setup", "Profile"].map((item, index) => (
            <a key={index} className="text-lg font-medium hover:text-red-500 transition duration-300" href="#">
              {item}
            </a>
          ))}
        </div>
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-glow pointer-events-none"></div>
      </div>
    </>
  );
}

export default Navbar;