$(()=>{
  $("[stat-trak]").each(function(){
    
    let trackers = $(this).attr('stat-trak');

    trackers.toLowerCase().split(',').forEach(
      (tracker) => {
        switch(tracker){
          case 'hover':
            setupHoverTracker(this);
            break;
          case 'click':
            setupClickTracker(this);
            break;
          default:
            console.warn(`${tracker} tracker not set up!`);
        }
      }
    );
  });
});

function setupHoverTracker(element){
  $(element).on(
    'mouseenter',
    function(){
      $(this).attr('stat-hover',true);
    }
  ).on(
    'mouseleave',
    function(){
      $(this).attr('stat-hover',false);
    }
  ).attr(
    'stat-hover',
    false
  );
}

function setupClickTracker(element){
  $(element).on(
    'click',
    function(){

      let clicks = $(this).attr('stat-click') || 0;

      $(this).attr(
        'stat-click',
        parseInt(clicks) + 1
      );
    }
  ).attr(
    'stat-click',
    0
  );
}