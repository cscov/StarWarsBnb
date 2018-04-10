# This file should contain all the record creation needed to seed the database
# with its default values.
# The data can then be loaded with the rails db:seed command (or created
# alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }
#])
#   Character.create(name: 'Luke', movie: movies.first)


host1 = User.create!({ password: 123456, email_address: 'cscovdarth',
                     first_name: 'Darth', planet: 'Tatooine',
                     verified: false,
                     bio: "The most pwoerful Sith Lord ever",
                     avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253129/darth_vader.webp",
                     phone_number: "(123) 456-4567", superhost: false })
host2 = User.create!({ password: 123456, email_address: 'cscovhan',
  first_name: 'Han', planet: 'Corellia',
  verified: false, bio: "Smuggler with a heart of gold",
  avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253162/han.png",
  phone_number: "(123) 456-8901", superhost: false })

host3 = User.create!({ password: 123456, email_address: 'cscovjyn',
  first_name: 'Jyn', planet: "La'Mu", verified: false,
  bio: "Just a rebel",
  avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253133/jyn-erso_1.jpg",
  phone_number: "(123) 456-2345", superhost: false })

host4 = User.create!({ password: 123456, email_address: 'cscovLando',
  first_name: 'Lando', planet: "Socorro", verified: false,
  bio: "I'm an entrepreneur. Let's make a deal",
  avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253127/Lando_WoSW.jpg",
  phone_number: "(123) 456-7234", superhost: false })

host5 = User.create!({ password: 123456, email_address: 'cscovobi',
  first_name: 'Obi-Wan', planet: 'Stewjon',
  verified: false,
  bio: "I will return more powerful than you can
  possibly imagine",
  avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253161/obi_wan.jpg",
  phone_number: "(123) 456-8346", superhost: false })

host6 = User.create!({ password: 123456, email_address: 'cscovpoe',
  first_name: 'Poe', planet: 'Yavin IV',
  verified: false, bio: "Rebel. The best pilot
  you've ever seen with the greatest leather jackets.",
  avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253147/poe.jpg",
  phone_number: "(123) 456-2908", superhost: false })

host7 = User.create!({ password: 123456, email_address: 'cscovluke',
  first_name: 'Luke', planet: 'Tatooine',
  verified: false, bio: "The folksiest farmboy
  you'll ever meet.", avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253122/luke.jpg",
  phone_number: "(123) 456-5238", superhost: false })

host8 = User.create!({ password: 123456, email_address: 'cscov',
  first_name: 'Leia', planet: 'Alderaan', verified: false,
  bio: "The only princess that matters.",
  avatar: "http://res.cloudinary.com/dvqilcc9p/image/upload/c_scale,r_30,w_128/v1523253137/leia.jpg",
  phone_number: "(123) 456-7216", superhost: false })

spot1 = Spot.create!({ host_id: host1.id,
                rental_type: "ENTIRE HOUSE",
                title: "Windswept Dunes",
                planet: "Tatooine",
                num_guests: 3,
                num_bedrooms: 2,
                num_baths: 1,
                num_beds: 2,
                daily_rate: 20,
                description: "I don't like sand. It's coarse and
                it's rough and it gets everywhere. That's
                why I am renting out my childhood home. Hope you don't
                mind sand!",
                basic_amenity_category: true,
                wifi: false,
                indoor_fireplace: false,
                tv: true,
                iron: false,
                essentials: true,
                heating: false,
                air_conditioning: true,
                hot_water: true,
                facilities_amenity_category: true,
                parking: true,
                hot_tub: false,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: true,
                lockbox: false,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: false,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: false,
                carbon_monoxide_detector: true,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: true,
                washer: true,
                private_entrance: false,
                sleeping_arrangements: "1 queen bed and 1 twin bed",
                house_rules: "Just take off your shoes in the
                house and clean up after yourself",
                cancellation_policy: "Strict
                Cancel up to 7 days before check in and get a 50%
                refund (minus service fees). Cancel within 7 days
                of your trip and the reservation is non-refundable.
                Service fees are refunded when cancellation happens
                before check in and within 48 hours of booking.",
                getting_around: "We usually ride banthas, but if
                you get lucky you could rent a podracer",
                address: "23 Dune Lane, Mos Eisley, Tatooine",
                directions: "Just head west from the spaceport",
                house_manual: "No parties. Quiet hours start at 10PM",
                num_reviews: 101 })

            spot2 = Spot.create!({   host_id: host2.id,
                rental_type: "ENTIRE CAVE",
                title: "The Ice Palace",
                planet: "Hoth",
                num_guests: 2,
                num_bedrooms: 1,
                num_baths: 1,
                num_beds: 1,
                daily_rate: 25,
                description: "Perfect for those who don't mind
                hiding out in the cold.",
                basic_amenity_category: true,
                wifi: false,
                indoor_fireplace: true,
                tv: false,
                iron: false,
                essentials: true,
                heating: true,
                air_conditioning: false,
                hot_water: true,
                facilities_amenity_category: true,
                parking: true,
                hot_tub: false,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: true,
                lockbox: false,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: false,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: false,
                carbon_monoxide_detector: true,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: true,
                washer: true,
                private_entrance: true,
                sleeping_arrangements: "1 queen bed",
                house_rules: "I don't plan on coming back here so
                do what you want with it.",
                cancellation_policy: "Flexible cancellation policy
                Cancel up to 24 hours before check in and get a full
                refund (minus service fees). Cancel within 24 hours
                of your trip and the first night is non-refundable.
                Service fees are refunded when cancellation happens
                before check in and within 48 hours of booking.",
                getting_around: "Ride a Tauntaun! They are also good
                for warmth",
                address: "74 Rocky Road, Iceton, Hoth",
                directions: "It's just around the corner from the
                landing pad on your left",
                house_manual: "There are no rules in this cave.
                This is a fun cave",
                num_reviews: 52 })

              spot3 = Spot.create!({ host_id: host3.id,
                rental_type: "ENTIRE HOUSE",
                title: "Farming Comforts",
                planet: "La'Mu",
                num_guests: 3,
                num_bedrooms: 2,
                num_baths: 2,
                num_beds: 2,
                daily_rate: 80,
                description: "This is a fully sustainable farm,
                with plenty of blue milk to drink!",
                basic_amenity_category: true,
                wifi: true,
                indoor_fireplace: true,
                tv: true,
                iron: true,
                essentials: true,
                heating: true,
                air_conditioning: true,
                hot_water: true,
                facilities_amenity_category: true,
                parking: true,
                hot_tub: false,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: false,
                lockbox: true,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: true,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: true,
                carbon_monoxide_detector: true,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: true,
                washer: true,
                private_entrance: true,
                sleeping_arrangements: "1 queen bed and 1 twin bed",
                house_rules: "Please take off your shoes in the
                house and clean up after yourself, we work hard
                to keep the place clean",
                cancellation_policy: "Strict
                Cancel up to 7 days before check in and get a 50%
                refund (minus service fees). Cancel within 7
                days of your trip and the reservation is
                non-refundable. Service fees are refunded when
                cancellation happens before check in and within
                48 hours of booking.",
                getting_around: "We have a small speeder but
                usually just end up walking",
                address: "45 Hidden Way, La'Pesh, La'Mu",
                directions: "Head south from the spaceport and
                turn left at the fork in the road. Keep going
                until you see the beach.",
                house_manual: "No parties. Quiet hours start at
                10PM. Suitable for pets.",
                lock_instructions: "The door code is 7321.",
                num_reviews: 75 })

              spot4 = Spot.create!({ host_id: host4.id,
                rental_type: "ENTIRE APARTMENT",
                title: "Come Gamble",
                planet: "Bespin",
                num_guests: 6,
                num_bedrooms: 3,
                num_baths: 3,
                num_beds: 3,
                daily_rate: 250,
                description: "Even though we started as a mining
                facility, we have the best casino in the whole
                system. Come see for yourself!",
                basic_amenity_category: true,
                wifi: true,
                indoor_fireplace: true,
                tv: true,
                iron: true,
                essentials: true,
                heating: true,
                air_conditioning: true,
                hot_water: true,
                facilities_amenity_category: true,
                parking: true,
                hot_tub: true,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: true,
                lockbox: true,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: true,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: true,
                carbon_monoxide_detector: true,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: false,
                washer: true,
                private_entrance: true,
                sleeping_arrangements: "3 king beds",
                house_rules: "If you can dream it, you can do it!
                That's why my casino is the best.",
                cancellation_policy: "Strict
                Cancel up to 7 days before check in and get a 50%
                refund (minus service fees). Cancel within 7
                days of your trip and the reservation is non-refundable.
                Service fees are refunded when cancellation happens
                before check in and within 48 hours of booking.",
                getting_around: "Rent a luxury speeder driver for
                the length of your trip",
                address: "38 Tower Plaza, Cloud City, Bespin",
                directions: "Turn right at the first cloudbank and
                left at the second cloudbank.",
                house_manual: "Just have fun. Quiet hours are
                technically at 2AM but are rarely enforced.",
                lock_instructions: "The door code is 4523.",
                num_reviews: 306 })

              spot5 = Spot.create!({ host_id: host5.id,
                rental_type: "ENTIRE TREEHOUSE",
                title: "Go Camping",
                planet: "Endor",
                num_guests: 4,
                num_bedrooms: 2,
                num_baths: 12,
                num_beds: 2,
                daily_rate: 50,
                description: "The Ewoks have kindly rented out
                certain homes in their village. It's quite charming.",
                basic_amenity_category: true,
                wifi: true,
                indoor_fireplace: false,
                tv: false,
                iron: false,
                essentials: true,
                heating: true,
                air_conditioning: false,
                hot_water: true,
                facilities_amenity_category: true,
                parking: true,
                hot_tub: false,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: false,
                lockbox: false,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: false,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: true,
                carbon_monoxide_detector: false,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: true,
                washer: true,
                private_entrance: false,
                sleeping_arrangements: "1 queen bed and 2 hammocks",
                house_rules: "Please bank the fire before you go
                to sleep at night and rekindle it in the morning.",
                cancellation_policy: "Flexible cancellation policy
                Cancel up to 24 hours before check in and get a full
                refund (minus service fees). Cancel within 24 hours
                of your trip and the first night is non-refundable.
                Service fees are refunded when cancellation happens
                before check in and within 48 hours of booking.",
                getting_around: "There are some very fast speeder
                bikes in the area",
                address: "67 Tree Lane, Yubdub, Endor",
                directions: "Follow the natural forest paths and
                you will soon reach the village.",
                house_manual: "Small parties are allowed. Quiet
                hours start at 12AM",
                num_reviews: 59 })

              spot6 = Spot.create!({ host_id: host6.id,
                rental_type: "PRIVATE ROOM",
                title: "Relax on the Beach",
                planet: "Scarif",
                num_guests: 2,
                num_bedrooms: 1,
                num_baths: 1,
                num_beds: 1,
                daily_rate: 75,
                description: "Relax under the palm trees and
                soak up the sun! If you get bored of that, visit
                the data facility, one of the largest this side
                of Coruscant!",
                basic_amenity_category: true,
                wifi: true,
                indoor_fireplace: false,
                tv: true,
                iron: false,
                essentials: true,
                heating: true,
                air_conditioning: true,
                hot_water: true,
                facilities_amenity_category: true,
                parking: true,
                hot_tub: false,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: true,
                lockbox: false,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: false,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: false,
                carbon_monoxide_detector: true,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: true,
                washer: true,
                private_entrance: false,
                sleeping_arrangements: "1 queen bed and 1 twin bed",
                house_rules: "Just take off your shoes in the house
                and clean up after yourself",
                cancellation_policy: "Strict
                Cancel up to 7 days before check in and get a 50% refund
                (minus service fees). Cancel within 7 days of your
                trip and the reservation is non-refundable. Service
                fees are refunded when cancellation happens before
                check in and within 48 hours of booking.",
                getting_around: "We usually ride banthas, but if
                you get lucky you could rent a podracer",
                address: "23 Dune Lane, Mos Eisley, Tatooine",
                directions: "Just head west from the spaceport",
                house_manual: "No parties. Quiet hours start at 10PM",
                num_reviews: 67 })

              spot7 = Spot.create!({ host_id: host7.id,
                rental_type: "ENTIRE HUT",
                title: "Get Away From It All",
                planet: "Ach-To",
                num_guests: 2,
                num_bedrooms: 1,
                num_baths: 1,
                num_beds: 2,
                daily_rate: 50,
                description: "Mediatate in peace while the Caretakers
                cater to your every need.",
                basic_amenity_category: true,
                wifi: false,
                indoor_fireplace: true,
                tv: false,
                iron: false,
                essentials: true,
                heating: true,
                air_conditioning: false,
                hot_water: true,
                facilities_amenity_category: true,
                parking: false,
                hot_tub: false,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: true,
                lockbox: true,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: false,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: true,
                carbon_monoxide_detector: true,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: true,
                washer: true,
                private_entrance: false,
                sleeping_arrangements: "2 twin beds",
                house_rules: "Please do not make extra work for the
                Caretakers and be respectful of the island.",
                cancellation_policy: "Strict
                Cancel up to 7 days before check in and get a 50% refund
                (minus service fees). Cancel within 7 days of your
                trip and the reservation is non-refundable. Service
                fees are refunded when cancellation happens before
                check in and within 48 hours of booking.",
                getting_around: "I sure hope you like walking and
                stairs!",
                address: "???, The Island, Ach-To",
                directions: "If you found this place, congratulations!
                I did not plan on having any visitors.",
                house_manual: "No parties. Quiet hours start at sundown.",
                num_reviews: 3 })

              spot8 = Spot.create!({ host_id: host8.id,
                rental_type: "ENTIRE PALACE",
                title: "Royal Accomodations",
                planet: "Naboo",
                num_guests: 6,
                num_bedrooms: 3,
                num_baths: 3,
                num_beds: 3,
                daily_rate: 305,
                description: "Come stay at the royal palace in the
                elegant city of Theed. Enjoy stunning views and
                brisk walks through the historic Theater District.",
                basic_amenity_category: true,
                wifi: true,
                indoor_fireplace: true,
                tv: true,
                iron: true,
                essentials: true,
                heating: true,
                air_conditioning: true,
                hot_water: true,
                facilities_amenity_category: true,
                parking: true,
                hot_tub: true,
                dining_amenity_category: true,
                kitchen: true,
                guest_access_amenity_category: true,
                lockbox: true,
                bed_bath_amenity_category: true,
                hangers: true,
                hair_dryer: true,
                shampoo: true,
                safety_amenity_category: true,
                fire_extinguisher: true,
                carbon_monoxide_detector: true,
                smoke_detector: true,
                first_aid_kit: true,
                not_included_amenity_category: false,
                washer: true,
                private_entrance: true,
                sleeping_arrangements: "3 king beds",
                cancellation_policy: "Strict
                Cancel up to 7 days before check in and get a 50% refund
                (minus service fees). Cancel within 7 days of your
                trip and the reservation is non-refundable. Service
                fees are refunded when cancellation happens before
                check in and within 48 hours of booking.",
                getting_around: "We recommend a private gondola ride
                down the river",
                house_rules: "Please do not make extra work for the
                Caretakers and be respectful of the island.",
                address: "1 Palace Way, Theed, Naboo",
                directions: "You don't need directions, as the royal
                chaffeur will pick you up.",
                house_manual: "Please let the servants know if you
                need anything, and remove your shoes while indoors.",
                num_reviews: 521 })
