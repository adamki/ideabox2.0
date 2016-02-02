class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all.most_recent
  end

  def show
    respond_with Idea.find_by(id: params[:id])
  end

  def create
    idea = Idea.create!(idea_params)
    respond_with idea, location: [:api, :v1, idea] if idea.save
  end

  def update
    idea = Idea.find_by(id: params[:id])
    if idea.update(idea_params)
      respond_with nil, location: [:api, :v1, idea]
    end
  end

  def destroy
    respond_with Idea.find(params[:id]).delete
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end

end
