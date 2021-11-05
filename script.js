let treeItemStart = '';

let treeItem = `
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
  </div>
`;

const setMarkup = (wrapper, isChild = false) => {
  if ( isChild === true ) {
    treeItemStart = '<div class="tree-item child-item">';
    const item = treeItemStart + treeItem;
    wrapper.append(item);
    
    console.log('child');
  } else {
    treeItemStart = '<div class="tree-item">';
    const item = treeItemStart + treeItem;
    wrapper.append(item);
  }
}

$(document).ready( () => {
  const treeWrapper = $('.tree-wrapper');

  setMarkup(treeWrapper);

  treeWrapper.on( 'click', (e) => {
    const target = $(e.target);
    
    // add
    if ( target.hasClass('add-item') ) {
      if ( target.parents('.tree-item').hasClass('child-item') ) {
       setMarkup(treeWrapper, true);
      } else {
        setMarkup(treeWrapper);
      }
    }

    // rm
    if ( target.hasClass('rm-item') ) {
      const item = target.parents('.tree-item');
      item.remove();
    }

    // add a child
    if ( target.hasClass('add-child-item') ) {
      isChild = true;
      setMarkup(treeWrapper, true);
      isChild = false;
    }
  } );
} );