import './util/module-alias';
import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super()
    }
    // não colocamos o init no construtor pois iremos fazer testes assíncronos com chamada ao banco
    // por isso é melhor deixar separado, primeiro instancia a classe e depois inicia o servidor
    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }
    //responsável por fazer o setup do express
    private setupExpress(): void {
        this.app.use(bodyParser.json())
    }

    private setupControllers(): void {
        const forecastController= new ForecastController();
        this.addControllers([forecastController])
    }
}