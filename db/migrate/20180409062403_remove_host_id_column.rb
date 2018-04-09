class RemoveHostIdColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :spots, :host_id
  end
end
