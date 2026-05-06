export const fetchData = async (day) => {
  const res = await fetch(`http://localhost:5000/api/parental-legacy?day=${day}`);
  return res.json();
};