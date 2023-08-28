const getKDA = (kills: number, deaths: number, assists: number) =>
  ((kills + assists) / deaths).toFixed(2);

export default getKDA;
