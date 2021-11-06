// pass childUl as a wrapper for margin on the left
let childUl = '<ul class="child-ul">';

let li = `
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

const setMarkup = (wrapper, isChild = false) => {
  if ( isChild === true ) {
    const item = childUl + li + '</ul>';
    wrapper.append(item);
    
    console.log('child');
  } else {
    const item = li;
    wrapper.append(item);
  }
}

$(document).ready( () => {
  const treeWrapper = $('.tree-wrapper');

  // init
  setMarkup(treeWrapper);

  treeWrapper.on( 'click', (e) => {
    const target = $(e.target);
    
    // add
    if ( target.hasClass('add-item') ) {
      const wrapper = target.closest('ul');
      setMarkup(wrapper);
    }

    // rm
    if ( target.hasClass('rm-item') ) {
      const item = target.parents('.tree-item');
      item.remove();
    }

    // add a child
    if ( target.hasClass('add-child-item') ) {
      const wrapper = target.closest('ul');
      setMarkup(wrapper, true);
    }
  } );

  // test of Class of localStorage handler
  const locStorageHandler = new LocStorageHandler();
  locStorageHandler.set('key', {test: 777});
  locStorageHandler.get('key');
  //locStorageHandler.rm('key');
} );