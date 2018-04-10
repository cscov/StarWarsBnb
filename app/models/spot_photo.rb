# == Schema Information
#
# Table name: spot_photos
#
#  id         :integer          not null, primary key
#  photo_id   :integer          not null
#  spot_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SpotPhoto < ApplicationRecord
  validates :photo_id, :spots_id, presence: true

  belongs_to :photo,
              class_name: :Photo,
              primary_key: :id,
              foreign_key: :photo_id

  belongs_to :spot,
              class_name: :Spot,
              primary_key: :id,
              foreign_key: :spot_id
end
