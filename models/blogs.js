const mongoose=require('mongoose');
const schema=mongoose.Schema;
const blogsschema=new schema({
    title:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
},{timestamps:true});


const Blog=mongoose.model('Blog',blogsschema);

module.exports=Blog;