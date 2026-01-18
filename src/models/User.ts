import mongoose,{Document,Schema}  from "mongoose";

export interface userData extends Document {
   name :string,
   email:string,
   password:string
}

const userSchema = new Schema<userData>({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }
},
{timestamps:true}
);

export const User = mongoose.model<userData>('UserNewCOllege',userSchema);