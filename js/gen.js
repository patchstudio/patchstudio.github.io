var elem = document.getElementById('bg');
var params = { fullscreen: true, autostart: true };
var two = new Two(params).appendTo(elem);
var shouldAdd = false, particles = [];

function addParticle(){
  var particle = two.makeCircle(0, 0, 50);
  particle.fill = '#00FFCC';
  particle.noStroke();
  
  particle.translation.set(two.width / 2, two.height / 2);
  particle.velocity = new Two.Vector(Math.random() * 10, Math.random() * 10);
  particle.velocity.rotation = Math.random() * Math.PI  / 8;
  particle.rect = particle.getBoundingClientRect();
  
  two.bind('update', function() {
    particle.translation.addSelf(particle.velocity);
    var w = particle.scale * particle.rect.width / 2;
    var h = particle.scale * particle.rect.height / 2;
    if ((particle.translation.x < w && particle.velocity.x < 0) || (particle.translation.x > two.width - w && particle.velocity.x > 0)) {
			particle.velocity.x *= -1;
		}

    if ((particle.translation.y < h && particle.velocity.y < 0) || (particle.translation.y > two.height - h && particle.velocity.y > 0)) {
       particle.velocity.y *= -1;
    }
  });
  
}

two.bind('update', function(frameCount) {
  if(shouldAdd){
    addParticle();
    shouldAdd = false;
  }
});

var spbutton = $('#launcher').bind('mousedown touchstart', function() {
	shouldAdd = true;
	two.bind('mouseup', removeAdding);
});