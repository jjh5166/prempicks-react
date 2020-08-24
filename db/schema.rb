# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_24_165040) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "current_matchdays", force: :cascade do |t|
    t.integer "singleton_guard"
    t.integer "matchday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["singleton_guard"], name: "index_current_matchdays_on_singleton_guard", unique: true
  end

  create_table "guest_picks", force: :cascade do |t|
    t.integer "user_id"
    t.string "team_id"
    t.integer "matchday"
    t.integer "points"
    t.integer "half"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "matchdays", force: :cascade do |t|
    t.integer "week", null: false
    t.boolean "locked", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "scored", default: false
    t.datetime "lock_time"
    t.boolean "current"
  end

  create_table "picks", force: :cascade do |t|
    t.integer "user_id"
    t.string "team_id"
    t.integer "matchday"
    t.integer "points"
    t.integer "half"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "half"], name: "half_picks"
    t.index ["user_id", "matchday"], name: "user_pick", unique: true
    t.index ["user_id"], name: "index_picks_on_user_id"
  end

  create_table "scores", force: :cascade do |t|
    t.integer "matchday", null: false
    t.integer "points", default: 0
    t.string "team_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["points"], name: "index_scores_on_points"
    t.index ["team_id", "matchday"], name: "score_key", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "team_name", default: "", null: false
    t.string "fname", default: "", null: false
    t.string "lname", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.boolean "guest", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
