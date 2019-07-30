class UsersController < ApplicationController
before_action :logged_in?
#skip_before_action :verify_authenticity_token

	def show
		user = User.find_by(id: params[:id])
		render json: user
	end
	
	def new
	    user = User.new		
	end
	
	def create
    	user = User.new(user_params)
    	user.save
    	if user
    		session(:user_id) = user.id
    		render json: user, status: 201
    	end
	end
	
	private
	
	def user_params
		params.require(:user).permit(:name, :username, :password)
	end


end