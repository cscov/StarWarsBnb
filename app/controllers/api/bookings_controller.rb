class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 401
    end
  end

  def edit
    @booking = Booking.find(params[:id])
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking.destroy
      render 'api/spots/${@booking.spot_id}'
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:traveler_id, :spot_id, :check_in,
                                    :check_out, :num_guests)
  end
end
