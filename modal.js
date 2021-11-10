class Modal {
  constructor(d) {
    $(document).on( 'click', (e) => {
      const target = $(e.target);

      if ( target.hasClass('btn-modal-close') ) {
        target.parents('.overlay').toggleClass('d-none');
      }
    } );
  }
  
  static modalMarkup = `
    <div class="overlay d-none">
      <div class="modal">
        <i class="fas fa-times btn-modal-close"></i>
        <div class="modal-head">
          Test Heading
        </div>
        <div class="modal-body">
          <p>Test...</p>
        </div>
      </div>
    </div>
  `;

  init(el) {
    el.append(Modal.modalMarkup);
  }

  show(doc) {
    $(doc).find('.overlay').toggleClass('d-none');
  }
}