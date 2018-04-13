class Booking < ApplicationRecord

  validates :reservation_code, :traveler_id, :spot_id, :check_in,
  :check_out, :total_cost, :trip_status, presence: true

  belongs_to :traveler,
             class_name: :User,
             primary_key: :id,
             foreign_key: :traveler_id

  belongs_to :spot,
             class_name: :Spot,
             primary_key: :id,
             foreign_key: :spot_id

  has_one :host,
          through: :spot,
          source: :host

  def parse_arrival_month
    arrival = self.check_in.to_s
    arrival = arrival[5..6]
    arrival_int = arrival.to_i

    MONTHS[arrival_int]
  end

  def parse_depart_month
    depart = self.check_out.to_s
    depart = depart[5..6]
    depart_int = depart.to_i

    MONTHS[depart_int]
  end

  def parse_arrival_day
    ar_day = self.check_in.to_s
    ar_day = ar_day[7..8]

    ar_day
  end

  def parse_depart_day
    de_day = self.check_in.to_s
    de_day = de_day[7..8]

    de_day
  end

  MONTHS = %w( 0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
end
