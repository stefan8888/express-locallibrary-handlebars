var mongoose = require('mongoose');
var moment = require('moment')

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id;
});

BookSchema
.virtual('due_back_formatted')
.get(function () {
    return this.due_back ? moment(this.due_back).format('MMMM Do, YYYY') : '';
});

BookSchema
.virtual('id_to_string')
.get(function () {
    return this._id.toString();
});


//Export model
module.exports = mongoose.model('Book', BookSchema);