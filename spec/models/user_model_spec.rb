require "byebug" # delete

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

  describe "helper methods" do
    describe "#reset_session_token!" do
      let(:user) { FactoryBot.build(:user) }
      it "creates a new session token for the current user" do
        first_token = user.session_token
        user.reset_session_token!
        expect(user.session_token).to_not eq(first_token)
      end
    end

    describe "#ensure_session_token" do
      let(:user1) { FactoryBot.build(:user) }
      let(:user2) { FactoryBot.build(:user, session_token: nil) }

      context "when a user already has a session token" do
        it "does not reset the user's session token" do
          user1_token = user1.session_token
          user1.ensure_session_token
          expect(user1.session_token).to eq(user1_token)
        end
      end
      context "when a user does not have a session token" do
        it "provides a new session token for the user" do
          expect(user2.session_token).to be_nil
          new_token = user2.ensure_session_token
          expect(user2.session_token).to eq(new_token)
        end
      end
    end

    describe ".find_by_credentials" do
      let(:found_user) { FactoryBot.build(:user) }
      let(:invalid_user) { FactoryBot.build(:user) }

      context "when a user has been found" do
        it "returns a user" do
          found_user.password = '123456'
          found_user.save
          # debugger # delete
          expect(User.find_by_credentials(found_user.email_address, found_user.password))
            .to eq(found_user)
        end
      end

      context "when a user has not been found" do
        it "returns nil" do
          invalid_user.password = '123457'
          # invalid_user is not saved
          expect(User.find_by_credentials(invalid_user.email_address, invalid_user.password))
            .to be_nil
        end
      end
    end

    describe "#valid_password?" do
      let(:found_user) { FactoryBot.build(:user) }
      let(:other_user) { FactoryBot.build(:user) }
      it "returns true if the given password belongs to the receiving user" do
        found_user.password = '123456'
        expect(found_user.valid_password?(found_user.password)).to be true
      end
      it "returns false if the given password doesn't belong to the receiving user" do
        other_user.password = '1234567'
        expect(found_user.valid_password?(other_user.password)).to be false
      end
    end

    describe "#password=" do
      let(:no_digest_user) { FactoryBot.build(:user, password_digest: nil) }
      it "creates a password digest based on the given password" do
        no_digest_user.password = '1234567'
        expect(no_digest_user.password_digest).to_not be_nil
      end
    end
  end
end
