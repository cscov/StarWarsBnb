json.spot do


    json.extract! @spot, :id, :spot_photo_urls, :rental_type, :planet, :title, :num_guests, :num_bedrooms, :num_beds,
    :num_baths, :description, :basic_amenity_category,
    :wifi, :indoor_fireplace, :tv, :iron, :essentials, :heating,
    :air_conditioning, :hot_water, :facilities_amenity_category,
    :parking, :hot_tub, :dining_amenity_category, :kitchen, :guest_access_amenity_category,
    :lockbox, :bed_bath_amenity_category, :hangers, :hair_dryer,
    :shampoo, :safety_amenity_category, :fire_extinguisher, :carbon_monoxide_detector,
    :smoke_detector, :first_aid_kit, :not_included_amenity_category,
    :washer, :private_entrance, :sleeping_arrangements, :house_rules,
    :cancellation_policy, :getting_around, :address, :directions,
    :house_manual, :lock_instructions, :num_reviews
    json.extract! @spot.host, :first_name, :avatar
  end
