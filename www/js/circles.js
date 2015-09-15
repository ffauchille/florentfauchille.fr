/* Circles for florentfauchille.fr */

var javaCircle = new ProgressBar.Circle('#java-circle', {
    color: '#FCB03C',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var pythonCircle = new ProgressBar.Circle('#python-circle', {
    color: '#FCB03C',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});
var cppCircle = new ProgressBar.Circle('#cpp-circle', {
    color: '#FCB03C',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});
var umlCircle = new ProgressBar.Circle('#uml-circle', {
    color: '#FCB03C',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var projectCircle = new ProgressBar.Circle('#project-circle', {
    color: '#1E90FF',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var agileCircle = new ProgressBar.Circle('#agile-circle', {
    color: '#1E90FF',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var softwareCircle = new ProgressBar.Circle('#software-circle', {
    color: '#1E90FF',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var informationSystemCircle = new ProgressBar.Circle('#information-system-circle', {
    color: '#1E90FF',
    size: 4,
    strokeWidth: 1.5,
    trailWidth: 1,
    duration: 2000,
    text:{
        value: '0'
    },
    step: function(state, bar){
        bar.setText((bar.value() * 100).toFixed(0));
    }
});


var displayAnimations = function() {
    javaCircle.animate(0.60);
    pythonCircle.animate(0.80);
    cppCircle.animate(0.25);
    umlCircle.animate(0.55);
    projectCircle.animate(0.30);
    agileCircle.animate(0.40);
    softwareCircle.animate(0.50);
    informationSystemCircle.animate(0.50);
};


/* Scroll animation script */
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

