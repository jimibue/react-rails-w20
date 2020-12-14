class Api::ItemsController < ApplicationController
  def index
    if (params[:sort])
      render json: Item.all.order(params[:sort])
    else
      render json: Item.all
    end
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    # item = Item.find(params[:id])
    # if item.update(item_params)
    #   render json: item
    # else
    #   render json: { errors: item.errors }, status: :unprocessable_entity
    # end

    item = Item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item
  end

  def destroy
    item = Item.find(params[:id]).destroy
    render json: item
  end

  private

  def item_params
    params.require(:item).permit(:name, :complete)
  end
end
