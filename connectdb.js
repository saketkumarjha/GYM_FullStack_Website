import mongoose from "mongoose";
const connectdb = async (database_url) => {
  try {
    const db_option = {
      dbName: "school",
    };
    await mongoose.connect(database_url, db_option);
    console.log("connected succefully");
  } catch (err) {
    console.log(err);
  }
};
export { connectdb };
