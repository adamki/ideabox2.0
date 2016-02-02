class Idea < ActiveRecord::Base
  validates :title, presence: :true
  validates :body, presence: :true
  validates :quality, presence: :true
  enum quality: %w(swill plausible genius)
  scope :most_recent, -> { order(:created_at)}
end
