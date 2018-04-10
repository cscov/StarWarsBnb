export const fetchAllSpots = () => {
  return $.ajax({
    url: 'api/spots',
    method: 'GET',
  });
};
