class User < ApplicationRecord
  has_and_belongs_to_many :projects
  has_many :user_projects, class_name: 'UserProject', foreign_key: 'user_id'
end
