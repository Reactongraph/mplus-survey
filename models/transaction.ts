import mongoose from 'mongoose';
const { Schema } = mongoose;

const transactionSchema: any = new Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      unique: true
    },
    couponId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Coupon'
    }
  },
  { timestamps: true }
);

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);
export default Transaction;
