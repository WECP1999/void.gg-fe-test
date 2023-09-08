const calculateTime = (num: number) => {
  return (num / 60).toFixed(2).toLocaleString().replace('.', ':');
};

export default calculateTime;
