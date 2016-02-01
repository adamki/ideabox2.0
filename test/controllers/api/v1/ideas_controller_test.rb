require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    idea_count = Idea.count
    get :index, format: :json

    assert_response :success
    assert_equal idea_count, json_response.count
  end

  test "#show" do
    idea = Idea.create!(title: "test idea", body: "test desc", quality: 2)
    get :show, id: idea.id, format: :json

    assert_response :success
    assert_equal "test idea", json_response["title"]
    assert_equal "test desc", json_response["body"]
    assert_equal "genius", json_response["quality"]
  end

  test "#show returns only one item" do
    idea = Idea.create!(title: "test idea", body: "test desc", quality: 2)
    idea = Idea.create!(title: "next idea", body: "next desc", quality: 2)
    get :show, id: idea.id, format: :json

    assert_kind_of Hash, json_response
  end

  test "#create imcrements DB count by one" do
    idea = {title: "titled idea", body: "descriptive idea"}

    assert_difference 'Idea.count', 1 do
      post :create, idea: idea, format: :json
    end
  end


end
