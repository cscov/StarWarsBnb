class AddUniqueEmailAddress < ActiveRecord::Migration[5.1]
  def change
    change_column(:users, :email_address, :string, {unique: true})
  end
end
