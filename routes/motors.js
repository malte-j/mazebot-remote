const express = require('express'),
      router  = express.Router();

let gpio;
const pins = [5, 6, 7, 8]; // l-fwd, r-fwd, l-bwd, r-bwd

if(process.env.PI) {
  gpio = require('rpi-gpio');
  
  pins.forEach(pin => gpio.setup(pin, gpio.DIR_OUT));
}


router.post('/', function(req, res, next) {
  
  //gpio.write(pins[req.body.target], req.body.status)
  console.log(req.body);
  res.send('ok');
});

module.exports = router;