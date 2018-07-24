RSpec.describe SpotPhoto, type: :model do
  context "validations" do
    it { should validate_presence_of(:photo_id) }
    it { should validate_presence_of(:spot_id) }
  end

  context "associations" do
    it { should belong_to(:photo) }
    it { should belong_to(:spot) }
  end
end
