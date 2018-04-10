class AddIndexToSpotPhotos < ActiveRecord::Migration[5.1]
  def change
    add_index :spot_photos, :photo_id
    add_index :spot_photos, :spot_id
  end
end
