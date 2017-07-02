class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    user = User.find_by email: params[:user][:email].downcase

    if user && user.valid_password?(params[:user][:password])
      sign_in(resource_name, user)
      render json: {status: :success, message: t(".login_success")}
    else
      render json: {status: :error, message: t(".login_error")}
    end
    # self.resource = warden.authenticate!(sign_in_params)

    # if self.resource && warden.authenticate!(sign_in_params)
    #   sign_in(resource_name, resource)
    #   yield resource if block_given?
    #   render json: {status: :success, message: t(".login_success"), location: "#{after_sign_in_path_for(resource)}"}
    # else
    #   render json: {status: :error, message: t(".login_error")}
    # end
  end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end

  def sign_in_params
    devise_parameter_sanitizer.sanitize(:sign_in)
  end
end
