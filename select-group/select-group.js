var themelist = {
  'default':  ['active','inactive']
}

$(()=>{
  $('[class*=select-group-]').each(function(){

    let list = this.classList;
    let n = 0;
    let t = 'default';

    list.forEach(e => {
      if(e.includes('select-group-')){
        n = e.split('-').pop();
      }
      if(e.includes('select-theme-')){
        t = e.split('-').pop();
      }
    });

    $(this).on(
      'click',
      function(){
        buttonSelectionGroup(this,n,t);
      }
    );
  });
});
  
function buttonSelectionGroup(element,number,theme){

  let current_theme = themelist[theme] ?? 'default';
  let [selected,deselected] = themelist[current_theme];

  $('.select-group-'+number).removeClass(selected).addClass(deselected);
  $(element).removeClass(deselected).addClass(selected); 
}