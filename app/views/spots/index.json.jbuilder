json.array! @spots do |spot|
  json.extract! spot.rental_type, spot.title, spot.planet, spot.daily_rate, spot.num_reviews
end
