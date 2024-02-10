export const BasePage = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Todo App</span>
        </div>
      </nav>
      <div className="container pt-3 w-75">{children}</div>
    </div>
  );
};

export default BasePage;
