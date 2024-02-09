const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    age: String,
    photoProfile: String,
    phone: String,
    firstname: String,
    lastname: String,
    address: String,
    etat: {
      type: String,
      enum: ["PASSENGER", "DRIVER"],
      default: "PASSENGER"
    }
  },
  {
    timestamps: true,
  }
);

userSchema.methods.displayProfile = function () {
  return {
    username: this.username,
    email: this.email,
    age: this.age,
    photoProfile: this.photoProfile,
    phone: this.phone,
    firstname: this.firstname,
    lastname: this.lastname,
    address: this.address,
    etat: this.etat,
  };
};

// Method to update user information
userSchema.methods.updateInfo = function (updateData) {
  if (updateData.etat) this.etat = updateData.etat;
  if (updateData.username) this.username = updateData.username;
  if (updateData.email) this.email = updateData.email;
  if (updateData.age) this.age = updateData.age;
  if (updateData.photoProfile) this.photoProfile = updateData.photoProfile;
  if (updateData.phone) this.phone = updateData.phone;
  if (updateData.firstname) this.firstname = updateData.firstname;
  if (updateData.lastname) this.lastname = updateData.lastname;
  if (updateData.address) this.address = updateData.address;
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
