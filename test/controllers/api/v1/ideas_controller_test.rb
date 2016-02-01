require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    idea_count = Idea.count
    get :index, format: :json

    assert_response :success
    assert_equal idea_count, json_response.count
  end
end
