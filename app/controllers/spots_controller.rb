class SpotsController < ApplicationController
  def show
  end

  def index
    @spots = Spot.all
    render :index
  end
end
