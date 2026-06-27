import { LOCATION } from "./location.data";

export const TRAVEL = [

  {
    icon: '🚗',
    title: 'Mit dem Auto',
    text:  LOCATION.location + '\n' + LOCATION.address.replace(', ', ',\n')
  },

  {
    icon: '🚆',
    title: 'Mit der Bahn',
    text: LOCATION.train
  },

  {
    icon: '🚌',
    title: 'ÖPNV',
    text: LOCATION.publicTransport
  },

  {
    icon: '🚲',
    title: 'Fahrrad',
    text: 'Vor Ort stehen ausreichend Fahrradstellplätze zur Verfügung.'
  }

];