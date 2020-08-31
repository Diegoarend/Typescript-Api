import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';

import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours_.json';

import stormGlassNormalizedWeather3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass Service', async () => {
    const lat = -33.799999;
    const lng = 151.88889;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

    //esperamos que haja uma classe com o nome StormGlass
    const stormGlass = new StormGlass(axios);
    //deve existir um método fetchPoints que retornem os poins para as lat e lng passadas
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual({ stormGlassNormalizedWeather3HoursFixture });
  });
});
