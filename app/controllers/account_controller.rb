class AccountController < ApplicationController
  respond_to :json
  before_action :authenticate_user!

  def update
    @user = current_user
    if @user.update(account_update_params)
      render json: {data: "Your account has been updated"}, status: 200
    else
      render json: {data: "Error processing request"}, status: 500
    end
  end

  private

  def account_update_params
    params.require(:user).permit(:fname, :lname, :team_name, :email, :password, :password_confirmation, :current_password)
  end
end
