const Blog = require("../models/blog");

exports.postBlog = async (req, res) => {
  try {
    const blog = await new Blog({ ...req.body }).save();
    // console.log("saved link => ", link);
    res.json(blog);
  } catch (err) {
    console.log(err);
  }
};

exports.blogs = async (req, res) => {
  try {
    const all = await Blog.find().sort({ createdAt: -1 }).limit(500);
    res.json(all);
  } catch (err) {
    console.log(err);
  }
};
exports.blog=async(req,res)=>{
    try {
        const one=await Blog.findOne({id:req.params.id}).exec();
        res.json(one)
    } catch (error) {
        console.log(error)
    }
}
