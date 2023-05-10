export const userLoader = async () => {
  const res = await fetch("http://localhost:4000/users");
  return res.json();
};
