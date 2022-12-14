// https://mongoosejs.com/docs/schematypes.html

// export const ProjectTypes = Object.freeze({
//   "Scrum":0,
//   "BugTracking":1,
//   "TaskTracking":2
// });

module.exports = mongoose => {
  // định nghĩa cấu trúc bảng
  var schema = mongoose.Schema(
    {
      Name: String,
      Key: String,
      Type: Number,
      Leader: String,
      Category: String,
      Permissions: [String]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Projects = mongoose.model("Projects", schema);
  return Projects;
};