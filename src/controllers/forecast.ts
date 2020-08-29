import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

//automaticamente vai ter uma rota na api /forecast
@Controller('forecast')
export class ForecastController {
  //quando ocorrer um get em /forecast vai chamar esse método
  @Get('')
  //como uma aplicação express, rebebe um req e um res
  // como não vamos utilzar o req vamos utilizar o _
  //vamos passar os tipos também REQ E RESP e o método com tipo void pois não retorna nada
  public getForecastForLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        time: '2020-04-26T00:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 64.26,
            swellHeight: 0.15,
            swellPeriod: 3.89,
            time: '2020-04-26T00:00:00+00:00',
            waveDirection: 231.38,
            waveHeight: 0.47,
            windDirection: 299.45,
          },
        ],
      },
      {
        time: '2020-04-26T01:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 123.41,
            swellHeight: 0.21,
            swellPeriod: 3.67,
            time: '2020-04-26T01:00:00+00:00',
            waveDirection: 232.12,
            waveHeight: 0.46,
            windDirection: 310.48,
          },
        ],
      },
    ]);
  }
}
