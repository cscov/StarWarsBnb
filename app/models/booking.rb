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

    months_of_year = self.months
    months_of_year[arrival_int]
  end

  def parse_depart_month
    depart = self.check_out.to_s
    depart = depart[5..6]
    depart_int = depart.to_i

    months_of_year = self.months
    months_of_year[depart_int]
  end

  def parse_arrival_day
    ar_day = self.check_in.to_s
    ar_day = ar_day[8..9]

    ar_day
  end

  def parse_depart_day
    de_day = self.check_out.to_s
    de_day = de_day[8..9]

    de_day
  end

  def parse_time_in
    time_in = self.check_in.to_s
    time_in = time_in[11..12].to_i

    if time_in > 12
      time_in = time_in - 12
    end
    time_in
  end

  def parse_time_out
    time_out = self.check_out.to_s
    time_out = time_out[11..12].to_i

    if time_out > 12
      time_out = time_out - 12
    end
    time_out
  end

  def total_days
    day_in = self.parse_arrival_day.to_i
    day_out = self.parse_depart_day.to_i
    day_out - day_in
  end

  def months
    %w( 0 Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
  end
end
