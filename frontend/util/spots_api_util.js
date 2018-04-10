export const fetchAllSpots = () => (
   $.ajax({
    url: 'api/spots',
    method: 'GET',
  })
);
