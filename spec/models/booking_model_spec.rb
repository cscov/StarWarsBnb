require "rails_helper"

RSpec.describe Booking, type: :model do
  it { should validate_presence_of(:reservation_code) }
end
