class PostsController < ActionController::Base
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
    	render json :@post
    else
      render json {:message @post.errors}, status: 301
    end
  end

  def show
    @post = Post.find(params[:id])
    render json :@post
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update!(post_params)
      render json: @post
    else
      render json {:message @post.errors}, status: 400
    end
  end

  def index
      @posts = Post.all
      render json: @posts
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render status: 204
    else
      render json: {message: "Unable to remove this post"}, status: 400
  else

  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

end