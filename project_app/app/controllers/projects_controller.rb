class ProjectsController < ApplicationController
  def index
    user = User.find_by(id: user_id)

    if user
      render json: {
        projects: user.user_projects.as_json
      }, status: :ok
    else
      render json: {
        error: :not_found
      }, status: :not_found
    end
  end

  private

  def user_id
    params[:user_id]
  end
end
