class Api::SandwichesController < ApplicationController
  before_action:set_sandwich, only: [:show, :destroy, :update]

  #get /api/sandwiches
  def index
    render json:Sandwich.all
  end

    # get /api/sandwiches/:id
    def show
      render json: @sandwich
    end
  
    # post /api/sandwiches
    def create
      @sandwich = Sandwich.new(sandwich_params)
      if (@sandwich.save)
        render json: @sandwich
      else
        render json: { errors: @sandwich.errors }, status: :unprocessable_entity
      end
    end
  
    # put/patch /api/sandwiches/:id
    def update
      if (@sandwich.update(sandwich_params))
        render json: @sandwich
      else
        render json: { errors: @sandwich.errors }, status: :unprocessable_entity
      end
    end
  
    # delete /api/sandwiches/:id
    def destroy
      render json: @sandwich.destroy
    end
  
    private
  
    def sandwich_params
      params.require(:sandwich).permit(:name, :price, :description)
    end
  
    def set_sandwich
      @sandwich = Sandwich.find(params[:id])
    end
end
