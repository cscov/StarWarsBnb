json.extract! booking, :id, :check_in, :check_out, :num_guests, :traveler_id,
              :parse_arrival_month, :parse_depart_month,
              :parse_arrival_day, :parse_depart_day
json.extract! booking.spot, :planet, :spot_first_photo
