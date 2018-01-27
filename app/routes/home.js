import Ember from 'ember';

export default Ember.Route.extend({
    model() {
			return [{
				alt: 'mata ka bhawan',
				src: 'images/mata-bhawan1.jpeg'
			},
			{
				alt: 'mata ka bhawan',
				src: 'images/mata-bhawan2.jpeg'
			},
			{
				alt: 'mata ka bhawan',
				src: 'images/mata-bhawan3.jpeg'
			},
			]
    }
});
