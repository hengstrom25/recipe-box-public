class UsersController < ApplicationController
#skip_before_action :verify_authenticity_token

	def index
		#categories = Category.where(user_id: current_user.id)
		users = User.all
		render json: users
	end
	
	def show
		user = User.find_by(id: params[:id])
		render json: user
	end
	
	def new
	    user = User.new		
	end
	
	def create
    	user = User.create
    	render json: user, status: 201
	end
	
	private
	
	def user_params
		params.require(:user).permit(:name, :username, :password)
	end


end