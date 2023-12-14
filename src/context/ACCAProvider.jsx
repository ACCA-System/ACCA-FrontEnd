import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ACCAContext = createContext();

const ACCAProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userToEdit, setUserToEdit] = useState({});
  const [users, setUsers] = useState([]);
  const [alerta, setAlert] = useState({});
  const { auth } = useAuth();

  const navigate = useNavigate();

  const getConfig = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  };
  useEffect(() => {
    getUsers();

  }, [auth]);

  const showAlert = (alert) => {
    setAlert(alert);
      setAlert({});
  };

  const cleanUserToEdit = () => {
    setUserToEdit({});
  };

  const getUser = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/User/?userId=${id}`, config);
      setUserToEdit(data);
      setAlert({});
      navigate("/welcome/usersForm");
    } catch (error) {
      navigate("/welcome/users");
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } 
  };
  const getUserData = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get(`/User/?userId=${id}`, config);
      setUser(data);
      setAlert({});
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } finally {
    }
  };
  const getUsers = async () => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.get("/Users", config);
      setUsers(data);
      setAlert({});
    } catch (error) {
    }
  };

  const submitUser = async (user) => {
    if (user.userId) {
      await updateUser(user);
    } else {
      await newUser(user);
    }
  };
  const newUser = async (user) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.post("/User", user, config);
      setAlert({
        msg: "User created",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getUsers();
        navigate("/welcome/users");
      }, 1000);
    } catch (error) {
      alert(error.request.responseText);
        }
  };
  const updateUser = async (user) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.put(
        `/User`,
        user,
        config
      );
      setAlert({
        msg: "User Update",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getUsers();
        navigate("/welcome/users");
      }, 1000);
    } catch (error) {
    }
  };

  const deleteUser = async (userId) => {
    try {
      const config = getConfig();
      if (!config) return;
      const { data } = await clienteAxios.delete(
        `/User/?userId=${userId}`, config);
      setAlert({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlert({});
        getUsers();
      }, 1000);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    }
  };

  const closeSesion = () => {
    setAlert({});
  };



  return (
    <ACCAContext.Provider
      value={{
        userToEdit,
        user,
        setUser,
        getUser,
        getUserData,
        deleteUser,
        submitUser,
        users,
        setUsers,
        getUsers,
        alerta,
        showAlert,
        closeSesion,
        cleanUserToEdit,
      }}
    >
      {children}
    </ACCAContext.Provider>
  );
};
export { ACCAProvider };

export default ACCAContext;