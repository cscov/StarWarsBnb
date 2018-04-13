export const fetchTrips = (id) => (
  $.ajax({
    url: `api/users/${id}/bookings`,
    method: 'GET'
  })
);

export const fetchTrip = (userId, tripId) => (
  $.ajax({
    url: `api/users/${userId}/bookings/${tripId}`,
    method: 'GET',
  })
);
