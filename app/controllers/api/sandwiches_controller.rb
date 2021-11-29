class Api::SandwichesController < ApplicationController

  def index
    render json:Sandwich.all
  end

end
