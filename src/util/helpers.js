const getYear = (date) => {
  if (!date) {
    return 'No Date Available';
  }
  return date.split('-')[0];
};

export { getYear };
