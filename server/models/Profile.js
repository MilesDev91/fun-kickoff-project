const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  // To allow similar names
  id: {
    type: Number,
    required: true
  },
  availability: {
    unavailableDates: [Date],
    extraAvailability: [Date],
    weeklyAvailability: {
      // These will be strings of date time ranges
      monday: [String],
      tuesday: [String],
      wednesday: [String],
      thursday: [String],
      friday: [String],
      saturday: [String],
      sunday: [String]
    }
  },
  description: String,
  sitter: {
    isSitting: { type: boolean, required: true },
    hourlyRate: Number,
    Rating: Number
  },
  requests: [{
    // Decides whether the request is for this user's services or sent from this user to request services
    isSitter: { type: Boolean, required: true },
    startDate: Date,
    endDate: Date
  }],
  booking: {
    appointments: [{
      date: { type: Date, required: true },
      owner: { type: String, required: true },
      pet: {
        breed: { type: String, required: true },
        name: { type: String, required: true }
      }
    }]
  },
  favoriteUsers: [String],
  pets: [{
    breed: { type: String, required: true },
    name: { type: String, required: true }
  }]
})

module.exports = Profile = mongoose.model("profile", profileSchema)