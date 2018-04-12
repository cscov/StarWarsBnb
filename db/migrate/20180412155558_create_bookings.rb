class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.string :reservation_code
      t.integer :traveler_id, null: false
      t.integer :spot_id, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
      t.integer :total_cost, null: false
      t.timestamps
    end
    add_index :bookings, :traveler_id
    add_index :bookings, :spot_id
  end
end
