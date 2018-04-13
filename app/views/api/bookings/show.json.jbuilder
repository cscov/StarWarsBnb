json.booking do

  json.extract! @booking, :id, :reservation_code, :check_in, :check_out,
                :total_cost, :num_guests, :parse_arrival_month,
                :parse_depart_month, :parse_arrival_day, :parse_depart_day,
                :parse_time_in, :parse_time_out, :total_days

  json.extract! @booking.spot, :planet, :address, :lock_instructions,
                :directions, :house_manual, :house_rules, :spot_first_photo

  json.extract! @booking.spot.host, :avatar, :first_name, :phone_number
end
