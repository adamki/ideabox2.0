require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    idea_count = Idea.count
    get :index, format: :json

    assert_response :success
    assert_equal idea_count, json_response.count
  end

  test "#create imcrements DB count by one" do
    idea = {title: "titled idea", body: "descriptive idea"}

    assert_difference 'Idea.count', 1 do
      post :create, idea: idea, format: :json
    end
  end

end
