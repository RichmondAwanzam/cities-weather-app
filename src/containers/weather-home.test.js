import React from 'react';
import WeatherHome from './weather-home';

import {mount,shallow} from '../enzyme'


describe('', () => {
    const wrapper = mount(<WeatherHome
      
    />);
  
    const text = wrapper.text();
  

    it('renders correct information with no notes', () => {
        expect(text).toMatch(/No Available Note/);
      });

    it('renders correct button label when not editing', () => {
      expect(text).toMatch(/add Note/);
    });

    it('renders correct static text', () => {
        expect(text).toMatch(/Available Notes/);
      });
  
 
  });