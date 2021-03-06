require "byebug" # delete

RSpec.describe Spot, type: :model do
  context "validations" do
    it { should have_db_index(:host_id) }

    it { should validate_presence_of(:host_id) }
    it { should validate_presence_of(:rental_type) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:planet) }
    it { should validate_presence_of(:num_guests) }
    it { should validate_presence_of(:num_bedrooms) }
    it { should validate_presence_of(:num_baths) }
    it { should validate_presence_of(:num_beds) }
    it { should validate_presence_of(:daily_rate) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:basic_amenity_category) }
    it { should validate_presence_of(:sleeping_arrangements) }
    it { should validate_presence_of(:house_rules) }
    it { should validate_presence_of(:cancellation_policy) }
    it { should validate_presence_of(:getting_around) }
    it { should validate_presence_of(:address) }
    it { should validate_presence_of(:directions) }
    it { should validate_presence_of(:house_manual) }

    # using `validate_inclusion_of` to assert that a boolean column
    # allows boolean values and disallows non-boolean ones cannot fully test
    # this, as boolean columns will automatically convert non-boolean values
    # to boolean ones
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

    describe ".amenities_minus_category" do
      it "returns a list of a spot's amenities" do
        expect(Spot.amenities_minus_category).to eq(['wifi', 'indoor fireplace', 'tv',
                                                     'iron', 'essentials', 'heating',
                                                     'air conditioning',
                                                     'hot water', 'parking',
                                                     'hot tub', 'kitchen',
                                                     'lockbox', 'hangers',
                                                     'hair dryer', 'shampoo',
                                                     'fire extinguisher',
                                                     'carbon monoxide detector',
                                                     'smoke detector',
                                                     'first aid kit', 'washer',
                                                     'private entrance'])
      end
    end

    describe ".amenity_categories" do
      it "returns an array of a spot's amenity categories" do
        expect(Spot.amenity_categories).to eq(['basic amenity category',
                                               'facilities amenity category',
                                               'dining amenity category',
                                               'guest access amenity category',
                                               'bed bath amenity category',
                                               'safety amenity category',
                                               'not included amenity category'])
      end
    end

    describe ".js_parse" do
      let(:ruby_name) { "amenity_category" }
      it "returns a table attribute in sentence form" do
        expect(Spot.js_parse(ruby_name)).to eq("Amenity category")
      end
    end

    describe ".ruby_parse" do
      let(:ruby_name) { "amenity_category" }
      it "converts a table attribute from Ruby notation to English notation" do
        expect(Spot.ruby_parse(ruby_name)).to eq("amenity category")
      end
    end

    describe "#amenities_not_included" do
      let(:main_spot) { FactoryBot.build(:spot) }
      it "returns an array of the amenities that are not included at a spot" do
        # debugger # delete
        expect(main_spot.amenities_not_included).to eq(['indoor fireplace',
                                                        'tv', 'iron',
                                                        'air conditioning',
                                                        'parking', 'hot tub',
                                                        'lockbox', 'private entrance'])
      end
    end

    describe "#amenities_included" do
      let(:main_spot) { FactoryBot.build(:spot) }
      it "returns an array of all amenities present at a spot" do
        expect(main_spot.amenities_included).to eq(['Wifi', 'Essentials',
                                                    'Heating', 'Hot water',
                                                    'Kitchen', 'Hangers',
                                                    'Hair dryer', 'Shampoo',
                                                    'Fire extinguisher',
                                                    'Carbon monoxide detector',
                                                    'Smoke detector', 'First aid kit',
                                                    'Washer'])
      end
    end

    describe "#first_six_ament" do
      let(:main_spot) { FactoryBot.build(:spot) }
      it "returns an array of the first six amenities included in a spot" do
        expect(main_spot.first_six_ament).to eq(['Wifi', 'Essentials',
                                                 'Heating', 'Hot water',
                                                 'Kitchen', 'Hangers'])
      end
    end
  end
end
