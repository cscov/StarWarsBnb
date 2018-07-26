FactoryBot.define do
  factory :user do
    email_address 'johndoe@gmail.com'
    password_digest BCrypt::Password.create('123456')
    first_name 'John'
    planet 'Earth'
    bio 'I am a test person'
    avatar 'test_one.png'
    phone_number '555-555-5555'

    factory :invalid_user do
      email_address 'johndoe@gmail.com'
      password_digest BCrypt::Password.create('123456')
      first_name 'John'
      planet 'Earth'
      bio 'I am a test person'
      avatar 'test_one.png'
      phone_number '555-555-5555'
    end
  end
end
