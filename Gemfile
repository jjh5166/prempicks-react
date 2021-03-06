source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', github: 'rails/rails'
# Use postgres as the database for Active Record per Heroku
gem 'pg'
# webpacker for JS front end
gem 'webpacker', '~> 5.x'
# Use Puma as the app server
gem 'puma'
gem 'rack-cors'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 6.0'
gem 'devise'
gem 'devise-jwt'
gem 'football__data'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
gem 'aws-sdk-s3', require: false
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false
# No blank values in db, set blanks to nil
gem 'strip_attributes'
gem 'sidekiq'
gem 'sidekiq-scheduler'
gem 'dotenv-rails'

group :production do
  gem 'scout_apm'
end

group :development, :test do
  gem 'foreman'
  gem 'rspec-rails', '~> 4.0.0'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'rspec-sidekiq'
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15', '< 4.0'
  gem 'selenium-webdriver'
end
