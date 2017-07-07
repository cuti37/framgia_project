class Post < ApplicationRecord
  belongs_to :user
  has_many :post_tags
  has_many :tags, through: :post_tags
  has_many :comments

  scope :sort, ->{order created_at: :desc}
  mount_uploader :picture, PictureUploader

  validates :user, presence: true
  validates :title, presence: true, length: {maximum: Settings.posts.title.length_title}
  validates :content, presence: true
end
