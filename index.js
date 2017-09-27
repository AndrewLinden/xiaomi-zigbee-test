var util = require("util");
var ZShepherd = require('zigbee-shepherd');

var shepherd = new ZShepherd('/dev/ttyACM3', {
    net: {
        panId: 0x1a61
    }
});

shepherd.on('ready', function () {
    console.log('Server is ready.');

    // allow devices to join the network within 60 secs
    shepherd.permitJoin(60, function (err) {
        if (err)
            console.log(err);
    }); 
});

shepherd.on('permitJoining', function (joinTimeLeft) {
    console.log(joinTimeLeft);
});

shepherd.on('ind', function (msg) {
    switch (msg.type) {
        case 'devIncoming':
            console.log('Device: ' + msg.data + ' joining the network!');
            break;
        case 'attReport':
	    console.log('attreport: ' + msg.endpoints[0].device.ieeeAddr +' '+ msg.endpoints[0].devId +' '+ msg.endpoints[0].epId +' '+util.inspect(msg.data, false, null));
	    break; 
        default:
	    // console.log(util.inspect(msg, false, null));
            // Not deal with other msg.type in this example
            break;
    }
});


shepherd.start(function (err) {                // start the server
    if (err)
        console.log(err);
});

