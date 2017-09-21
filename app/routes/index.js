import Ember from 'ember';

var rentals = [{
    id: 1,
    owner: "Michael N. Mungai",
    type: "Flats",
    name: "Mariru Flats",
    purpose: "residential",
    details: "1 Bedroom self contained flat",
    locale: "Dagoretti,Mutuini",
    image: "",
    price: "Ksh 10,000 p.m.",
  },
  {

    id: 2,
    owner: "Michael N. Mungai",
    type: "Bungalow",
    name: "",
    purpose: "residential",
    details: "2 Bedroom self contained standalone with compound",
    locale: "Ngando, Lenana School area, Ngong Road",
    image: "",
    price: "Ksh 30,000 p.m."
  },
  {
    id: 3,
    owner: "Mary Gitau",
    type: "Maisonette",
    name: "Mwembe resort",
    purpose: "holiday home",
    details: "Large 2 bedroom maisonette",
    locale: "Mwembe, Malindi",
    image: "../public/img/mwembe1.jpg",
    Price: "Ksh  10,000 per night"
  }
];

export default Ember.Route.extend({
  model() {
    return rentals;
  }
});
