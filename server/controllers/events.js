const models = require('../../db/models');

module.exports.createEvents = (req, res) => {
  var options = {};
  console.log(req.body.events.eventsType);
  options['availability_id'] = '1';
  options['booking_id'] = '1';
  models.Event.where(options).destroy()
    .then((result)=> {
      models.Event.forge(req.body.events.list).save();
    });
};


req = {};
req.body = {};
req.body.events = {
  eventsType: 'availability',
  eventId: '1',
  list: {
    booking_id: '1',
    availability_id: '1',
    type: 'availability',
    establishment_type: 'point_of_interest',
    event_name: 'Legion of Honor, San Francisco, CA, United States',
    longitude: '37.7863901802915',
    latitude: '-122.4980650197085',
    time_spent: '45',
    travel_time: '7',
    google_place_id: 'ChIJmUsJz6yHhYARS9zv8DkGiEQ',
    google_maps_url: 'https://maps.google.com/?cid=4938203837336902731'
  }
};

//module.exports.createEvents(req, null);


module.exports.getAvailabilitesEvents = (req, res) =>{

};

// module.exports.createAvailability = (req, res) => {
//   models.User.where({facebook_id: req.body.facebookId}).fetch({columns: ['id']})
//   .then(result => {
//     models.Guide.where({user_id: result.id}).count()
//     .then(result2 => {
//       if (result2 === '0') {
//         models.Guide.forge({user_id: result.id})
//         .save()
//         .then(result3 => {
//           console.log('Successfully created a guide!');
//           models.Guide.where({user_id: result.id}).fetch({columns: ['id']})
//           .then(result4 => {
//             models.Availability.forge({guide_id: result4.id, city: req.body.city, hourly_rate: req.body.hourlyRate, intro: req.body.intro, statement: req.body.statement, start_hr: req.body.startHr, end_hr: req.body.endHr, date: req.body.date})
//             .save()
//             .then(result5 => {
//               console.log('Successfully created availability!');
//               res.status(200).send();
//             });
//           });
//         });
//       } else {
//         models.Guide.where({user_id: result.id}).fetch({columns: ['id']})
//         .then(result6 => {
//             console.log(req.body)
//           models.Availability.forge({guide_id: result6.id, city: req.body.city, hourly_rate: req.body.hourlyRate, intro: req.body.intro, statement: req.body.statement, start_hr: req.body.startHr, end_hr: req.body.endHr, date: req.body.date})
//           .save()
//           .then(result5 => {
//             console.log('Successfully created availability!');
//             res.status(200).send();
//           });
//         });
//       }
//     });
//   })
//   .error(err => {
//     res.status(500).send(err);
//   })
//   .catch(() => {
//     console.log('error creating availability.');
//     res.sendStatus(404);
//   });



      // {
      //   booking_id: req.body.eventListId,
      //   type: req.body.type,
      //   establishment_type: req.body.establishment_type,
      //   event_name: req.body.event_name,
      //   longitude: req.body.longitude,
      //   latitude: req.body.latitude,
      //   time_spent: req.body.time_spent,
      //   travel_time: req.body.travel_time,
      //   google_place_id: req.body.google_place_id,
      //   google_maps_url: req.body.google_maps.url
      // }
// };   