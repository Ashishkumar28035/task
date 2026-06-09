function MobileWrapper({ children }) {
  return (
    <div className="app-container">
      <div className="mobile-screen">
        {children}
      </div>
    </div>
  );
}

export default MobileWrapper;