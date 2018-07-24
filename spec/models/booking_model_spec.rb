require "rails_helper"

RSpec.describe Booking, type: :model do
  context "validations" do
    it { should validate_presence_of(:reservation_code) }
    it { should validate_presence_of(:traveler_id) }
    it { should validate_presence_of(:spot_id) }
    it { should validate_presence_of(:check_in) }
    it { should validate_presence_of(:check_out) }
    it { should validate_presence_of(:total_cost) }
    it { should validate_presence_of(:trip_status) }
  end
  context "associations" do
    it { should belong_to(:traveler) }
    it { should belong_to(:spot) }
    it { should have_one(:host) }
  end
  context "helper methods" do

    describe "#parse_arrival_month" do
      let(:book) { FactoryBot.build(:booking) }
      it "returns the check_in month as a noun string" do
        expect(book.parse_arrival_month).to eq('May')
      end
    end

    describe "#parse_depart_month" do
      let(:book) { FactoryBot.build(:booking) }
      it "returns the check_out month as a noun string" do
        expect(book.parse_depart_month).to eq('May')
      end
    end

    describe "#parse_arrival_day" do
      let(:book) { FactoryBot.build(:booking) }
      it "extracts the check_in day from the check_in attribute" do
        expect(book.parse_arrival_day).to eq('12')
      end
    end

    describe "#parse_depart_day" do
      let(:book) { FactoryBot.build(:booking) }
      it "extracts the check_out day from the check_out attribute" do
        expect(book.parse_depart_day).to eq('13')
      end
    end

    describe "#parse_time_in" do
      let(:book) { FactoryBot.build(:booking) }
      it "extracts the check_in time from the check_in attribute" do
        expect(book.parse_time_in).to eq(4)
      end
    end

    describe "#parse_time_out" do
      let(:book) { FactoryBot.build(:booking) }
      it "extracts the check_out time from the check_out attribute" do
        expect(book.parse_time_out).to eq(11)
      end
    end

    describe "#total_days" do
      let(:book) { FactoryBot.build(:booking) }
      it "calculates the number of nights in a reservation" do
        expect(book.total_days).to eq(1)
      end
    end

    describe "#months" do
      let(:book) { FactoryBot.build(:booking) }
      it "returns an array of noun months" do
        expect(book.months).to eq(%w(0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec))
      end
    end
  end
end
