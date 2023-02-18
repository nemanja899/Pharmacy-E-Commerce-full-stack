import mongoose from "mongoose";

const reviewSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comment :{
        type: String,
        require:false
      },
      user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
      }
    
});

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
 
    },
    description: {
      type: String,
      required: true,
    },
    reviews:[reviewSchema],
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0,
      },
      price: {
        type: Number,
        require: true,
        default: 0,
      },
      countInStock: {
        type: Number,
        require: true,
        default: 0,
      },
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('User',productSchema);

export default Product;