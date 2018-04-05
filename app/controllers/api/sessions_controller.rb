class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email_address],
                                     params[:user][:password])
    # debugger
    if @user
      login(@user)
      render json: @user
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: @user
    else
      render json: ["No one is logged in"], status: 404
    end

  end
end
