class Builder {
  constructor(opts) {
    this.parent = opts.parent;
    this.doc = opts.doc;
    this.setMarkup(this.parent);
    this.initModal(this.parent);

    const that = this;

    this.parent.on( 'click', (e) => {
      const target = $(e.target);
      /*
        N: wrapper => parent
      */
    
      // add
      if ( target.hasClass('add-item') ) {
        const parent = target.closest('ul');
        that.setMarkup(parent);
      }

      // add a child
      if ( target.hasClass('add-child-item') ) {
        const parent = target.closest('ul');
        that.setMarkup(parent, true);
      }

      // rm
      if ( target.hasClass('rm-item') ) {
        const item = target.parents('.tree-item');
        item.remove();
      }

      // show a modal with info
      if ( target.hasClass('open-item-settings') ) {
        that.showModal(this.doc);
      }
    } );
  }

  static modal = new Modal(this.doc);
  static childUl = '<ul class="child-ul">';
  static li = `
    <li class="tree-item">
      <div class="item-content">
        <i class="fas fa-circle item-priority" title="Item priority"></i>
        <input type="text" class="form-field" placeholder="">
      </div>
      <div class="item-actions">
        <i class="fas fa-ellipsis-v open-item-settings" title="Item settings"></i>
        <i class="far fa-plus-square add-item" title="Add an item"></i>
        <i class="far fa-minus-square rm-item" title="Remove an item"></i>
        <i class="fas fa-baby add-child-item" title="Add a child item"></i>
      </div>
    </li>
  `;

  setMarkup(parent, isChild = false) {
    const childUl = Builder.childUl;
    const li = Builder.li;
    
    if ( isChild === true ) {
      const item = childUl + li + '</ul>';
      parent.append(item);
      console.log('child');
    } else {
      const item = li;
      parent.append(item);
    }
  }

  initModal(parent) {
    Builder.modal.init(parent);
  }

  showModal(doc) {
    Builder.modal.show(doc);
  }
}