export const fetchTrips = (id) => (
  $.ajax({
    url: `api/users/${id}/bookings`,
    method: 'GET'
  })
);
