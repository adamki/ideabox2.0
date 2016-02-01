# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

3.times do
  Idea.create(title: Faker::Lorem.word, body: Faker::Hipster.sentence(3))
end

3.times do
  Idea.create(title: Faker::Lorem.word, body: Faker::Hipster.sentence(3), quality: 1)
end

3.times do
  Idea.create(title: Faker::Lorem.word, body: Faker::Hipster.sentence(3), quality: 2)
end
