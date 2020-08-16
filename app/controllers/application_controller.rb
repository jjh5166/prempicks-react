# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include AuthorizationHelper
  before_action :set_matchday
  protect_from_forgery
  
  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
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
