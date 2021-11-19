import mongoose from "mongoose";

const invoiceSchema = mongoose.Schema({
    userID : String,
    courseID : String,
    //no.of.hrs
});



const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;