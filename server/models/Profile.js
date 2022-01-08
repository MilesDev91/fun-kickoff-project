const mongoose = require("mongoose")

const timeRangeSchema = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  required: function () {
    return this.startTime.getTime() < this.endTime.getTime()
  }
})

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 30
  },
  lastName: {
    type: String,
    required: true,
    max: 30
  },
  availability: {
    // Unavailable and extra availability dates are for dates outside the normal weekly availability set by the user. This gives them more control over their schedule.
    unavailableDates: [Date],
    extraAvailability: [Date],
    weeklyAvailability: {
      // An array of start and end times (look at schema for more details)
      monday: [timeRangeSchema],
      tuesday: [timeRangeSchema],
      wednesday: [timeRangeSchema],
      thursday: [timeRangeSchema],
      friday: [timeRangeSchema],
      saturday: [timeRangeSchema],
      sunday: [timeRangeSchema]
    }
  },
  description: {
    type: String,
    max: 120
  },
  sitter: {
    isSitting: { type: Boolean, required: true, default: false },
    hourlyRate: {
      type: Number,
      max: 1000
    },
    overallRating: {
      type: Number,
      max: 5
    }
  },
  favoriteUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  pets: [{
    breed: { type: String, required: true, max: 30 },
    name: { type: String, required: true, max: 30 }
  }]
})

module.exports = Profile = mongoose.model("Profile", profileSchema)