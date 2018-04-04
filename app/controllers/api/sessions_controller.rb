class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email_address],
                                     params[:user][:password])
    if @user
      login(@user)
      render plain: "the user signed in!"
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render plain: "The user logged out!"
    else
      render json: ["No one is logged in"], status: 404
    end

  end
end
