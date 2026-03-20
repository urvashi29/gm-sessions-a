export const login = async (username, password) => {
  if (username === "admin" && password === "123456") {
    return {
      token: "fake-jwt",
      user: { name: "Admin" },
    };
  }

  throw new Error("Invalid Credentials");
};

export const getToken = () => localStorage.getItem("token");

export const logout = () => localStorage.removeItem("token");