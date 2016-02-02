class DashboardController < ApplicationController
  def show
    @ideas = Idea.all.most_recent
  end
end
