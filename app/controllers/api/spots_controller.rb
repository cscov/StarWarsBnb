class Api::SpotsController < ApplicationController
  def show
    @spot = Spot.find(params[:id])

  end

  def index
    @spots = Spot.all
  end
end
