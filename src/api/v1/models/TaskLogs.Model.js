// https://mongoosejs.com/docs/schematypes.html

module.exports = mongoose => {
  // định nghĩa cấu trúc bảng
  var schema = mongoose.Schema(
    {
      Id_Task: String,
      Id_User: String,
      Name: String,
      Action: String, // created, changed, updated, deleted...
      Target: String, // Property got change
      Before: String,
      After: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Projects = mongoose.model("TaskLogs", schema);
  return Projects;
};