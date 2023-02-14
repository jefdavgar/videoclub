const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
    act_name: String,
    act_gender: String,
    act_birthday: Date,
    act_birthplace: String
});

const directorSchema = new mongoose.Schema({
    dir_name: String,
    dir_gender: String,
    dir_birth: Date,
    dir_birthplace: String,
    dir_nationality: String
});

const ratingSchema = new mongoose.Schema({
    rev_id: Number,
    rev_stars: Number,
    num_o_ratings: Number,
    rev_name: String
});

const movieSchema = new mongoose.Schema({
    mov_id: Number,
    mov_title: String,
    mov_year: Number,
    mov_time: Number,
    mov_lang: String,
    mov_dt_rel: Date,
    mov_rel_country: String,
    director: directorSchema,
    genres: [String],
    actors: [actorSchema],
    ratings: [ratingSchema]
});

module.exports = mongoose.model("Movie", movieSchema);
