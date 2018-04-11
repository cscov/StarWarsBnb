class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render plain: "user saved!"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:email_address, :password, :first_name)
  end
end
