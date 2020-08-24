# frozen_string_literal: true

class ApplicationController < ActionController::Base
  respond_to :json
  protect_from_forgery with: :null_session
  
  def render_resource(resource)
    if resource.errors.empty?
      render json: resource, status: 201
    else
      render json: { errors: resource.errors }, status: 422
    end
  end

  private

  def team_codes
    path = Rails.root.join 'app', 'assets', 'data', 'code_to.json'
    file = File.read(path)
    JSON.parse(file)
  end

  def set_matchday
    @current_matchday = CurrentMatchday.find(1).matchday
  end
end
