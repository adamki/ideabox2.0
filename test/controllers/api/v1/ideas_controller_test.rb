require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    idea_count = Idea.count
    get :index, format: :json

    assert_response :success
    assert_equal idea_count, json_response.count
  end

  test "#show" do
    idea = Idea.create!(title: "test item", body: "test desc", quality: 2)
    get :show, id: idea.id, format: :json

    assert_response :success
    assert_equal "test item", json_response["title"]
    assert_equal "test desc", json_response["body"]
    assert_equal "genius", json_response["quality"]
  end

  test "#create imcrements DB count by one" do
    idea = {title: "titled idea", body: "descriptive idea"}

    assert_difference 'Idea.count', 1 do
      post :create, idea: idea, format: :json
    end
  end


end
