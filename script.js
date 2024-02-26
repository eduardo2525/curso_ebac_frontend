class Computador{
    constructor(cpu, gpu, armazenamento, placaMae, memoriaRam, gabinete, fonte) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.armazenamento = armazenamento;
        this.placaMae = placaMae;
        this.memoriaRam = memoriaRam;
        this.gabinete = gabinete;
        this.fonte = fonte
    }
}

class ComputadorTrabalho extends Computador {
    constructor(cpu, gpu, armazenamento, placaMae, memoriaRam, gabinete, fonte, rgb) {
        super(cpu, gpu, armazenamento, placaMae, memoriaRam, gabinete, fonte);
            this.rgb = rgb;
    }
}

class ComputadorGamer extends Computador {
    constructor(cpu, gpu, armazenamento, placaMae, memoriaRam, gabinete, fonte, rgb) {
        super(cpu, gpu, armazenamento, placaMae, memoriaRam, gabinete, fonte);
            this.rgb = rgb;
    }
}

const computador = new Computador('Ryzen 5 3600', 'RTX 3050', 'ssd 1TB', 'A320m', '16GB', 'Redragon Grindor', '500w 80 Plus Redragon');
const computadorTrabalho = new ComputadorTrabalho('i5 4400', 'GT 730', 'HD 500GB', 'LGA 1150', '8GB', 'Gabinete', '300w', false);
const computadorGamer = new ComputadorGamer('i9 9900K', 'RTX 4070 TI', 'Mv.2 2TB', 'Gigabyte Z390M Gaming', '64Gb', 'Redragon Wideload Pro', '1000w', true);

console.log(computador);
console.log(computadorTrabalho);
console.log(computadorGamer);