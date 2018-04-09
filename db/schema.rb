# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180409215334) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "spots", force: :cascade do |t|
    t.string "rental_type", null: false
    t.string "title", null: false
    t.string "planet", null: false
    t.integer "num_guests", null: false
    t.integer "num_bedrooms", null: false
    t.integer "num_baths", null: false
    t.integer "num_beds", null: false
    t.integer "daily_rate", null: false
    t.text "description", null: false
    t.boolean "basic_amenity_category", default: false, null: false
    t.boolean "wifi", default: false, null: false
    t.boolean "indoor_fireplace", default: false, null: false
    t.boolean "tv", default: false, null: false
    t.boolean "iron", default: false, null: false
    t.boolean "essentials", default: false, null: false
    t.boolean "heating", default: false, null: false
    t.boolean "air_conditioning", default: false, null: false
    t.boolean "hot_water", default: false, null: false
    t.boolean "facilities_amenity_category", default: false, null: false
    t.boolean "parking", default: false, null: false
    t.boolean "hot_tub", default: false, null: false
    t.boolean "dining_amenity_category", default: false, null: false
    t.boolean "kitchen", default: false, null: false
    t.boolean "guest_access_amenity_category", default: false, null: false
    t.boolean "lockbox", default: false, null: false
    t.boolean "bed_bath_amenity_category", default: false, null: false
    t.boolean "hangers", default: false, null: false
    t.boolean "hair_dryer", default: false, null: false
    t.boolean "shampoo", default: false, null: false
    t.boolean "safety_amenity_category", default: false, null: false
    t.boolean "fire_extinguisher", default: false, null: false
    t.boolean "carbon_monoxide_detector", default: false, null: false
    t.boolean "smoke_detector", default: false, null: false
    t.boolean "first_aid_kit", default: false, null: false
    t.boolean "not_included_amenity_category", default: false, null: false
    t.boolean "washer", default: false, null: false
    t.boolean "private_entrance", default: false, null: false
    t.string "sleeping_arrangements", null: false
    t.text "house_rules", null: false
    t.text "cancellation_policy", null: false
    t.text "getting_around", null: false
    t.string "address", null: false
    t.text "directions", null: false
    t.text "house_manual", null: false
    t.text "lock_instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "host_id", null: false
    t.integer "num_reviews", null: false
    t.index ["host_id"], name: "index_spots_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email_address", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "planet", null: false
    t.boolean "verified", default: false, null: false
    t.text "bio", null: false
    t.string "avatar", null: false
    t.string "phone_number", null: false
    t.boolean "superhost", default: false, null: false
    t.index ["email_address"], name: "index_users_on_email_address", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
  end

  add_foreign_key "spots", "users", column: "host_id"
end
