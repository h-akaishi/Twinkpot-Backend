class Api::UsersController < ApiController
  protect_from_forgery with: :null_session
  skip_before_action :authenticate_user_from_token!, only: %i(create)

  respond_to :json

  def create
    @user = User.new user_params

    if @user.save
      render :show, status: :created
    else
      render json: { error: t('user_create_error') }, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
