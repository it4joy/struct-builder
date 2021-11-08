class LocStorageHandler {
  constructor() {
    this.ls = window.localStorage;
  }

  has(key) {
    const ls = this.ls;
    
    return ls.getItem(key) === null ? false : true;
  }

  get(key) {
    const ls = this.ls;
    
    if ( this.has(key) ) {
      const item = ls.getItem(key);
      const val = JSON.parse(item);
      return val;
    }
  }

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

// N: mv into class
$('.btn-modal-close').on( 'click', (e) => {
  const target = $(e.target);

  if ( target.hasClass('btn-modal-close') ) {
    target.parents('.overlay').toggleClass('d-none');
  }
} );