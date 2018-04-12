json.booking do

  json.extract! @booking, :id, :reservation_code, :check_in, :check_out,
                :total_cost, :num_guests

  json.extract! @booking.spot, :planet, :address, :lock_instructions,
                :directions, :house_manual, :house_rules

  json.extract! @booking.spot.host, :avatar, :first_name, :phone_number
end
