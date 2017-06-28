class Post < ApplicationRecord
  belongs_to :user
  has_many :post_tags
  has_many :tags, through: :post_tags
  has_many :comments

  validates :user, presence: true
  validates :title, presence: true, length: {maximum: Settings.posts.title.maximum}
  validates :content, presence: true
end
