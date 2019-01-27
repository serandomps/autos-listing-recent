var Vehicle = require('vehicles-service');
var list = require('vehicles-find');

module.exports = function (ctx, container, options, done) {
    var sandbox = container.sandbox;
    Vehicle.find({
        query: options,
        images: '288x162'
    }, function (err, vehicles) {
        if (err) {
            return done(err);
        }
        list(ctx, container, {
            vehicles: vehicles,
            title: 'Recently Added',
            size: 12
        }, done);
    });
};
