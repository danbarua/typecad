import { Pin } from './pin';

class Bus {}

export class GPIO extends Bus {
    io = new Pin;
    constructor(pin: Pin){
        super();
        if (pin){
             this.io = pin;
        }
    }
}

export class I2C extends Bus {
    sda = new Pin;
    scl = new Pin;
    constructor(sda: Pin, scl: Pin){
        super();
        this.sda = sda;
        this.scl = scl;
    }
}

export class UART extends Bus {
    rx = new Pin;
    tx = new Pin;
    constructor(rx: Pin, tx: Pin){
        super();
        this.rx = rx;
        this.tx = tx;
    }
}

export class USB extends Bus {
    DP = new Pin;
    DN = new Pin;
    constructor(DP: Pin, DN: Pin){
        super();
        this.DP = DP;
        this.DN = DN;
    }
}