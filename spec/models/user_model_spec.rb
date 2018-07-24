RSpec.describe User, type: :model do
  context "validations" do
    let(:user) { FactoryBot.build(:user) }
    it "assigns a session token before validation" do
      expect(user.session_token).to_not be_nil
    end
    it { should validate_length_of(:password).is_at_least(6) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:email_address) }

    describe "email address uniqueness" do
      let(:user1) { FactoryBot.build(:user) }
      let(:user2) { FactoryBot.build(:invalid_user) }
      it "validates the uniqueness of email addresses" do
        user1.save
        user2.save
        expect(user2).to_not be_valid
      end
    end
  end

  describe "associations" do
    it { should have_many(:spots) }
    it { should have_many(:trips) }
    it { should have_many(:bookings).through(:spots).source(:bookings) }

  end
end
