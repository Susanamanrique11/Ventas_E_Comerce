import { createContext, useState } from "react";

const AdminContext = createContext(null);

const AdminProvider = function ({ children }) {
  const [admin, setAdmin] = useState(null);
  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
export { AdminProvider };

export default AdminContext;