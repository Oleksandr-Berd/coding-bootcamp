export const switchPerson = (evt) => {
  return evt?.currentTarget?.dataset?.operation || null;
};