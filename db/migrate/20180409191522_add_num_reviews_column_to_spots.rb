class AddNumReviewsColumnToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :num_reviews, :integer, null: false
  end
end
