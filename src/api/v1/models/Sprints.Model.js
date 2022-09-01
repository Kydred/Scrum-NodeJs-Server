// https://mongoosejs.com/docs/schematypes.html

module.exports = mongoose => {
  // định nghĩa cấu trúc bảng
  var schema = mongoose.Schema(
    {
      Id_Project: String,
      Name: String,
      Goal: String,
      Time_start: Date,
      Time_end: Date,
      Time_plan: Date
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Projects = mongoose.model("Sprints", schema);
  return Projects;
};