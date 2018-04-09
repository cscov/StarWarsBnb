class AddColumnsToUsersTable < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :planet, :string
    add_column :users, :verified, :boolean
    add_column :users, :bio, :text
    add_column :users, :avatar, :string
    add_column :users, :phone_number, :string
    add_column :users, :superhost, :boolean

  end
end
