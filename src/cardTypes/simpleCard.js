const make = (name, damagePoints) => ({
  name,
  damage: () => damagePoints,
});

export default make;
