# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :url, presence: true

  has_one :spot_photo,
          class_name: :SpotPhoto,
          primary_key: :id,
          foreign_key: :photo_id

  has_one :spot,
          through: :spot_photo,
          source: :spot
end
