export const activityGraph = () => {
  const currentYear = new Date().getFullYear();

  return [
    { year: currentYear },
    { year: currentYear - 1 },
    { year: currentYear - 2 },
  ];
};
