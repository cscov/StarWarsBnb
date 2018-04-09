class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :rental_type, null: false
      t.string :title, null: false
      t.string :planet, null: false
      t.integer :num_guests, null: false
      t.integer :num_bedrooms, null: false
      t.integer :num_baths, null: false
      t.integer :num_beds, null: false
      t.integer :daily_rate, null: false
      t.text :description, null: false
      t.boolean :basic_amenity_category, null: false, default: false
      t.boolean :wifi, null: false, default: false
      t.boolean :indoor_fireplace, null: false, default: false
      t.boolean :tv, null: false, default: false
      t.boolean :iron , null: false, default: false
      t.boolean :essentials, null: false, default: false
      t.boolean :heating, null: false, default: false
      t.boolean :air_conditioning, null: false, default: false
      t.boolean :hot_water, null: false, default: false
      t.boolean :facilities_amenity_category, null: false, default: false
      t.boolean :parking, null: false, default: false
      t.boolean :hot_tub, null: false, default: false
      t.boolean :dining_amenity_category, null: false, default: false
      t.boolean :kitchen, null: false, default: false
      t.boolean :guest_access_amenity_category, null: false, default: false
      t.boolean :lockbox, null: false, default: false
      t.boolean :bed_bath_amenity_category, null: false, default: false
      t.boolean :hangers, null: false, default: false
      t.boolean :hair_dryer, null: false, default: false
      t.boolean :shampoo, null: false, default: false
      t.boolean :safety_amenity_category, null: false, default: false
      t.boolean :fire_extinguisher, null: false, default: false
      t.boolean :carbon_monoxide_detector, null: false, default: false
      t.boolean :smoke_detector, null: false, default: false
      t.boolean :first_aid_kit, null: false, default: false
      t.boolean :not_included_amenity_category, null: false, default: false
      t.boolean :washer, null: false, default: false
      t.boolean :private_entrance, null: false, default: false
      t.string :sleeping_arrangements, null: false
      t.text :house_rules, null: false
      t.text :cancellation_policy, null: false
      t.text :getting_around, null: false
      t.string :address, null: false
      t.text :directions, null: false
      t.text :house_manual, null: false
      t.text :lock_instructions
      t.timestamps
    end
    add_index( :spots, :host_id)
  end
end
