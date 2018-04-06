class AddDefaultsToFirstName < ActiveRecord::Migration[5.1]
  def change
    change_column(:users, :first_name, :string, null: false)
  end
end
