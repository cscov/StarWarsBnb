# == Schema Information
#
# Table name: spots
#
#  id                            :integer          not null, primary key
#  rental_type                   :string           not null
#  title                         :string           not null
#  planet                        :string           not null
#  num_guests                    :integer          not null
#  num_bedrooms                  :integer          not null
#  num_baths                     :integer          not null
#  num_beds                      :integer          not null
#  daily_rate                    :integer          not null
#  description                   :text             not null
#  basic_amenity_category        :boolean          default(FALSE), not null
#  wifi                          :boolean          default(FALSE), not null
#  indoor_fireplace              :boolean          default(FALSE), not null
#  tv                            :boolean          default(FALSE), not null
#  iron                          :boolean          default(FALSE), not null
#  essentials                    :boolean          default(FALSE), not null
#  heating                       :boolean          default(FALSE), not null
#  air_conditioning              :boolean          default(FALSE), not null
#  hot_water                     :boolean          default(FALSE), not null
#  facilities_amenity_category   :boolean          default(FALSE), not null
#  parking                       :boolean          default(FALSE), not null
#  hot_tub                       :boolean          default(FALSE), not null
#  dining_amenity_category       :boolean          default(FALSE), not null
#  kitchen                       :boolean          default(FALSE), not null
#  guest_access_amenity_category :boolean          default(FALSE), not null
#  lockbox                       :boolean          default(FALSE), not null
#  bed_bath_amenity_category     :boolean          default(FALSE), not null
#  hangers                       :boolean          default(FALSE), not null
#  hair_dryer                    :boolean          default(FALSE), not null
#  shampoo                       :boolean          default(FALSE), not null
#  safety_amenity_category       :boolean          default(FALSE), not null
#  fire_extinguisher             :boolean          default(FALSE), not null
#  carbon_monoxide_detector      :boolean          default(FALSE), not null
#  smoke_detector                :boolean          default(FALSE), not null
#  first_aid_kit                 :boolean          default(FALSE), not null
#  not_included_amenity_category :boolean          default(FALSE), not null
#  washer                        :boolean          default(FALSE), not null
#  private_entrance              :boolean          default(FALSE), not null
#  sleeping_arrangements         :string           not null
#  house_rules                   :text             not null
#  cancellation_policy           :text             not null
#  getting_around                :text             not null
#  address                       :string           not null
#  directions                    :text             not null
#  house_manual                  :text             not null
#  lock_instructions             :text
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#  host_id                       :integer          not null
#

class Spot < ApplicationRecord
  belongs_to :host,
             class_name: :User,
             foreign_key: :host_id

  validates :host_id, :rental_type, :title, :planet, :num_guests,
            :num_bedrooms, :num_baths, :num_beds, :daily_rate, :description,
            :basic_amenity_category,
            :sleeping_arrangements, :house_rules, :cancellation_policy,
            :getting_around, :address, :directions, :house_manual,
            presence: true

  validates_inclusion_of :wifi, :indoor_fireplace, :tv, :iron,
  :essentials, :heating, :air_conditioning, :hot_water,
  :facilities_amenity_category, :parking, :hot_tub,
  :dining_amenity_category, :kitchen, :guest_access_amenity_category,
  :lockbox, :bed_bath_amenity_category, :hangers, :hair_dryer,
  :shampoo, :safety_amenity_category, :fire_extinguisher,
  :carbon_monoxide_detector, :smoke_detector, :first_aid_kit,
  :not_included_amenity_category, :washer, :private_entrance, in: [true, false]

end
