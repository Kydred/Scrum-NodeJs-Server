// https://mongoosejs.com/docs/schematypes.html

module.exports = mongoose => {
  // định nghĩa cấu trúc bảng
  var schema = mongoose.Schema(
    {
      Name: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Projects = mongoose.model("Categories", schema);
  return Projects;
};