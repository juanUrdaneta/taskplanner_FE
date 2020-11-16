const formatUser = (data) => {
  return {
    name: data.name,
    email: data.email,
    acron: data.acronim,
    role: data.role,
  };
};

export { formatUser };
