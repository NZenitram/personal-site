function inputCommand(command, term){
  var input = command.toLowerCase()
  if(input == 'help') {
    term.echo(new String("GitHub: Opens up my GitHub profile \n\nLinkedIn: Opens my LinkedIn profile \n\nTuring: Opens my Turing School profile"));
  } else if(input == 'github') {
    window.open("https://www.github.com/nzenitram");
  } else if(input == 'linkedin') {
    window.open("https://www.linkedin.com/in/nzenitram");
  } else if(input == 'turing') {
    window.open("https://www.turing.io/alumni/nicholas-martinez")
  } else {
    term.echo(new String('Invalid Command: Type "Help" for more options'));
  };
};

jQuery(function($, terminal) {
  $('#console').terminal(function(command, term) {
  if (command !== '') {
    try {
      if (command !== undefined) {
        inputCommand(command, term);
        }
        } catch(e) {
          term.error(new String(e));
        }
        } else {
          term.echo('');
  }
},
  {
    greetings: 'Type Help For a List of Commands:',
    name: 'js_demo',
    height: 300,
    prompt: 'nm> '
    });
});

function appendHtml() {
  $(".blog").click(function() {
    $.ajax({
      'type' : 'GET',
      'url' : this.name,
      'success' : function(data){
        $("#description").html(data)
        $("body").scrollTop(0)
        $('.button-collapse').sideNav('hide')
      }
    })
  })
}

$( document ).ready(function() {
  appendHtml()

  $('.button-collapse').sideNav();

  $(window).on('scroll', function() {
    $('.button-collapse').sideNav('hide')
  })

  $('#shadow').mouseover(function(){
    $(this).addClass('hover fa-lg');
  });

  $('#shadow').mouseout(function(){
    $(this).removeClass('hover fa-lg');
  });

  $(".button-collapse").sideNav();

  $("#small-img").click(function() {
    $("#description").html("<div id='header' class='center'><div id='name-header'><h2 id='name'>Nicholas Martinez</h1></div><div id='avatar'><img alt='Nicholas Martinez' class='figure z-depth-5' href='/' src='https://s3-us-west-1.amazonaws.com/nzenitramwp/Nick+Martinez-min.jpg'></div><div id='main'><p>Currently working remotely for 250OK, an Indianapolis based email data analytics company. I have been working primarily in Python and Selenium building a back-end application that integrates four separate platforms and operating systems. In general, I am working with UI automation across Windows, MacOS, iOS and Android operating systems.<br><br>Independently, I have been working on my AWS Certified Solutions Architect certification through aCloud.guru's labs and lessons. I have also spent time studying and learning React JS through Frontend Master's as well as Chef's Infrastructure as Code through learn.chef.io.</p>")
  })
});
