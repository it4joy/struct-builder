class LocStorageHandler {
  constructor() {
    this.ls = window.localStorage;
    //console.log( typeof this.ls );
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
    /*
    if ( this.ls ) {
      const ls = this.ls;
      if ( ! ls.has(key) ) {
        const item = JSON.stringify(val);
        ls.setItem(key, item);
      }
    }
    */

    const ls = this.ls;
    
    if ( ! this.has(key) ) {
      const item = JSON.stringify(val);
      ls.setItem(key, item);
    }
  }

  rm(key) {
    if ( this.ls.has(key) ) {
      this.ls.removeItem(key);
    }
  }
}