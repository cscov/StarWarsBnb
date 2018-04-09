# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email_address   :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :session_token, presence: true
  validates :email_address, presence: true, uniqueness: true
  attr_reader :password

  has_many :spots, optional: true,
  class_name: :Spot,
  primary_key: :id,
  foreign_key: :host_id

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    user && user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
