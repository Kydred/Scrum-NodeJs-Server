module.exports = mongoose => {
    // định nghĩa cấu trúc bảng
    var schema = mongoose.Schema(
      {
        Id_Project: String,
        Id_Sprint: String,
        Id_Status: String, //FlowStatus
        Id_Reporter: String,
        Id_Parrent: String,
        Summary: String,
        Desciption: String,
        Assignee: [String],
        Label: [String],
        Point: Number,
        Est_time: Number,
        Work_time_start: Date,
        Work_time_end: Date,
        Work_time_break: Number,
        Attach_files: [String],
        Id_IssueType: String,
        Progress: mongoose.Schema.Types.Decimal128
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    // tên bảng
    const Tasks = mongoose.model("Tasks", schema);
    return Tasks;
  };