class ChangeUserDefaults < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :planet, :string, null: true
    change_column :users, :verified, :boolean, null: true
    change_column :users, :bio, :text, null: true
    change_column :users, :avatar, :string, null: true
    change_column :users, :phone_number, :string, null: true
    change_column :users, :superhost, :boolean, null: true 

  end
end
