class Api::SpotsController < ApplicationController
  def show
    @spot = Spot.includes([:photos], :host).find(params[:id])

  end

  def index
    @spots = Spot.all
  end
end
