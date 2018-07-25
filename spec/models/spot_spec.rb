require "byebug" # delete

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

  context "helper methods" do
    describe "#spot_first_photo" do
      let(:main_spot) { FactoryBot.build(:spot) }
      let(:main_spot_photo) { FactoryBot.build(:photo) }
      it "returns the url of the first photo in a spot's photo association" do
        photos = main_spot.photos
        photos.push(main_spot_photo)
        # debugger # delete
        expect(main_spot.spot_first_photo).to eq('test_photo.png')
      end
    end

    describe "#spot_photo_urls" do
      let(:main_spot) { FactoryBot.build(:spot) }
      let(:photo1) { FactoryBot.build(:photo) }
      let(:photo2) { FactoryBot.build(:photo2) }
      let(:photo3) { FactoryBot.build(:photo3) }

      it "returns an array of a spot's photo urls" do
        photos = main_spot.photos
        photos.push(photo1, photo2, photo3)
        expect(main_spot.spot_photo_urls).to eq(['test_photo.png',
                                                 'test_photo2.png',
                                                 'test_photo3.png'])
      end
    end
  end
end
