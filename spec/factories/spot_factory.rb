FactoryBot.define do
  factory :spot do
    id 1
    rental_type 'entire house'
    title 'Ice Cave #2'
    planet 'Earth'
    num_guests 2
    num_bedrooms 1
    num_baths 1
    num_beds 1
    daily_rate 65
    description "The coldest place you'll ever stay"
    basic_amenity_category true
    wifi true
    indoor_fireplace false
    tv false
    iron false
    essentials true
    heating true
    air_conditioning false
    hot_water true
    facilities_amenity_category false
    parking false
    hot_tub false
    dining_amenity_category true
    kitchen true
    guest_access_amenity_category false
    lockbox false
    bed_bath_amenity_category true
    hangers true
    hair_dryer true
    shampoo true
    safety_amenity_category true
    fire_extinguisher true
    carbon_monoxide_detector true
    smoke_detector true
    first_aid_kit true
    not_included_amenity_category true
    washer true
    private_entrance false
    sleeping_arrangements "1 queen bed"
    house_rules "Don't take your shoes off indoors. It's cold"
    cancellation_policy "Strict"
    getting_around "Walk"
    address "123 Main St Icetown AK 55555"
    directions "Turn left at the north pole"
    house_manual "Quiet hours are at 10PM"
    lock_instructions "The door code is 1234"
    host_id 1
    num_reviews 5
  end
end
