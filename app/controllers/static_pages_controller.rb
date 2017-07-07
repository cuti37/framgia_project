class StaticPagesController < ApplicationController
  def home
    if user_signed_in?
      @post = current_user.posts.build
      @posts = current_user.posts.paginate page: params[:page], per_page: Settings.posts.max_post
    else
      @posts = Post.sort.paginate page: params[:page], per_page: Settings.posts.max_post
    end
  end
end
