var data = require('./data');

module.exports = {
  getAllUsers: function () {
    var allUsers = [];
    for (var i = 0; i < data.length; i++) {
      allUsers.push(data[i].user_data.first_name + " " +data[i].user_data.last_name);
    }
    return allUsers;
  },
  getActiveUsers: function () {
    var activeUsers = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].user_data.active > 0) {
      activeUsers.push(data[i].user_data.first_name + " " + data[i].user_data.last_name);
      }
  }
  return activeUsers;
  }
};
