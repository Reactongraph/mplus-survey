import mongoose from 'mongoose';
const { Schema } = mongoose;

const couponSchema: any = new Schema({
  code: String,
  provider: String,
  availableCount: Number,
  image: String
});

const Coupon = mongoose.models.Coupon || mongoose.model('Coupon', couponSchema);
export default Coupon;
