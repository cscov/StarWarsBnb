require "rails_helper"

RSpec.describe Booking, type: :model do
  it { should validate_presence_of(:reservation_code) }
  it { should validate_presence_of(:traveler_id) }
  it { should validate_presence_of(:spot_id) }
  it { should validate_presence_of(:check_in) }
  it { should validate_presence_of(:check_out) }
  it { should validate_presence_of(:total_cost) }
  it { should validate_presence_of(:trip_status) }
end
