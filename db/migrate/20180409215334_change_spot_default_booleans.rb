class ChangeSpotDefaultBooleans < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :wifi, :boolean, :default => false
  end
end
