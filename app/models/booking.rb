class Booking < ApplicationRecord

  validates :reservation_code, :traveler_id, :spot_id, :check_in,
  :check_out, :total_cost, presence: true

  belongs_to :traveler,
             class_name: :User,
             primary_key: :id,
             foreign_key: :traveler_id
end
