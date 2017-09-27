# xiaomi-zigbee-test
Simple test of Xiaomi Zigbee devices with zigbee-shepherd and cc2531 dongle

### To run the demo

* Install
```sh  
$ git clone https://github.com/AndrewLinden/xiaomi-zigbee-test.git  
$ cd xiaomi-zigbee-test  
/xiaomi-zigbee-test$ npm install  
```

* Run it
```sh  
/xiaomi-zigbee-test$ node index.js  
```

* To see whats happening behind the scenes run it with debug enabled:
```sh  
/xiaomi-zigbee-test$ DEBUG=* node index.js  
```

### Notes
* Zigbee shepherd's pairing process can take quite a while (more than a minute).
* I have tested so far with WXKG01LM and WXKG02LM switches.
* When pairing WXKG01LM, after reset you need to toggle (short keypress) the reset button every couple of seconds to keep the switch from going to sleep until the pairing is complete.
