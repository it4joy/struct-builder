class LocStorageHandler {
  constructor() {
    this.ls = window.localStorage;
  }

  has(key) {
    const ls = this.ls;
    
    return ls.getItem(key) === null ? false : true;
    //const hasKey = this.ls.getItem(key) === null ? false : true;
    //console.log(hasKey);
  }

  get(key) {
    const ls = this.ls;
    
    if ( this.has(key) ) {
      const item = ls.getItem(key);
      const val = JSON.parse(item);
      console.log(val);
      //return val;
    }
  }
  
  // test ...
  set(key, val) {
    const ls = this.ls;
    
    if ( ! this.has(key) ) {
      const item = JSON.stringify(val);
      ls.setItem(key, item);
    }
  }

  rm(key) {
    const ls = this.ls;

    if ( this.has(key) ) {
      ls.removeItem(key);
    }
  }
}

class Modal {
  
}

$('.btn-modal-close').on( 'click', (e) => {
  const target = $(e.target);

  if ( target.hasClass('btn-modal-close') ) {
    console.log(target.attr('class'));
    target.parents('.overlay').toggleClass('d-none');
  }
} );