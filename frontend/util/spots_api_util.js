export const fetchAllSpots = () => (
   $.ajax({
    url: 'api/spots',
    method: 'GET',
  })
);

export const fetchSpot = id => (
  $.ajax({
    url: `api/spots/${id}`, 
    method: 'GET',
  })
);
