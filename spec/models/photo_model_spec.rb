RSpec.describe Photo, type: :model do
  context "validations" do
    it { should validate_presence_of(:url) }
  end

  context "associations" do
    it { should have_one(:spot_photo) }
    it { should have_one(:spot).through(:spot_photo).source(:spot) }
  end
end
