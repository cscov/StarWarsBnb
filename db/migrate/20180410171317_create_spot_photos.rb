class CreateSpotPhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :spot_photos do |t|
      t.integer :photo_id, null: false
      t.integer :spot_id, null: false
      t.timestamps
    end
    add_foreign_key :spot_photos, :photos
    add_foreign_key :spot_photos, :spots
  end
end
