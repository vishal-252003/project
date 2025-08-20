import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const AddTenderSchema = mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: [true,"title is required"],
    lowercase: true,
    trim: true
  },
  subcatnm: {
    type: String,
    required: [true,"subcategory name is required"],
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: [true,"description is required"],
    lowercase: true,
    trim: true
  },
  quotationiconnm: {
    type: String,
    required: [true,"quotation icon is required"],
    trim: true
  },
  edate: {
    type: String,
    required: [true,"edate is required"],
    trim: true
  },
});

// Apply the uniqueValidator plugin to UserSchema.
AddTenderSchema.plugin(uniqueValidator);

// compile schema to model
const AddTenderSchemaModel = mongoose.model('addtender_collection',AddTenderSchema);

export default AddTenderSchemaModel;