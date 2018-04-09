class AddOptionsToSpots < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :planet, :string, null: false
    change_column :users, :verified, :boolean, null: false, default: false
    change_column :users, :bio, :text, null: false
    change_column :users, :avatar, :string, null: false
    change_column :users, :phone_number, :string, null: false, unique: true
    change_column :users, :superhost, :boolean, null: false, default: false
  end
end
