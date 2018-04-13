class AddTripStatus < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :trip_status, :string
  end
end
