class PostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  def show
    @post = Post.find_by_id params[:id]
    if @post.nil?
      render json: {status: :error}
    else
      render json: {status: :success, html: render_to_string(partial: "posts/show", locals: {post: @post},  layout: false)}
    end
  end

  def create
    @post = current_user.posts.build post_params
    if @post.save
      render json: {status: :success, res: render_to_string(partial: "posts/post", locals: {post: @post}, layout: false)}
    else
      render json: {status: :error, res: @post.errors.full_messages}
    end
  end

  private

  def post_params
    params.require(:post).permit :title, :content, :picture
  end
end
