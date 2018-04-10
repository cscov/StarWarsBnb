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

require 'test_helper'

class SpotPhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
