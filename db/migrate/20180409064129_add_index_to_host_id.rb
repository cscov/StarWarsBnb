class AddIndexToHostId < ActiveRecord::Migration[5.1]
  def change
    add_index :spots, :host_id
  end
end
