class DashboardController < ApplicationController
  def show
    @ideas = Idea.all
  end
end
