FactoryBot.define do
  factory :booking do
    reservation_code 'ASDF12W'
    traveler_id 1
    spot_id 2
    check_in DateTime.civil(2018, 5, 12, 16, 0, 0)
    check_out DateTime.civil(2018, 5, 13, 11, 0, 0)
    total_cost 45
    num_guests 1
    trip_status 'completed'
  end
end
