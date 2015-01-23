class UsersController < ApplicationController
  
  def index
     unless user_signed_in?
      redirect_to "/users/sign_up"
    end
  end

end
