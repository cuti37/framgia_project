class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user
  validates :user, presence: true
  validates :content, presence: true
  validates :post, presence: true
end
