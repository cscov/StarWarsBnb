class AddNumGuestsToBooking < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :num_guests, :integer, null: false
  end
end
