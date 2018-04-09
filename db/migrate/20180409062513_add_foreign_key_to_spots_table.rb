class AddForeignKeyToSpotsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :host_id, :integer, null: false
    add_foreign_key :spots, :users, column: :host_id, primary_key: :id
  end
end
