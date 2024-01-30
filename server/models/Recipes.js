const mongoose = require('mongoose')


const RecipeSchema = new mongoose.Schema({
    _id: {
        $oid: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: true
    },
    quote_recipe: {
        type: String,
        required: true
    },
    image_recipe: {
        type: String,
        required: true
    },
    head_1: String,
    list0: String,
    list1: String,
    head_12: String,
    head_2: String,
    list2: String,
    head_3: String,
    list3: String,
    inst1: String,
    inst2: String,
    inst3: String,
    inst4: String,
    inst5: String,
    inst6: String,
    outro: String
});


const RecipeModel = mongoose.model("recipes", RecipeSchema)
module.exports = RecipeModel