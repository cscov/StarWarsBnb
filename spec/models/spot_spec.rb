RSpec.describe Spot, type: :model do
  context "validations" do
    it { should have_db_index(:host_id) }
  end

  context "associations" do
    it { should belong_to(:host).class_name('User').with_foreign_key(:host_id) }
    it { should have_many(:spot_photos) }
    it { should have_many(:photos).through(:spot_photos).source(:photo) }
    it { should have_many(:bookings) }
  end
end
