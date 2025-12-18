(function(){
  function $(s, ctx){ return (ctx||document).querySelector(s); }
  function $all(s, ctx){ return Array.from((ctx||document).querySelectorAll(s)); }
  var modal = $('#contact-modal');
  if(!modal) return;
  var panel = $('#contact-modal .contact-modal-panel');
  var openModal = function(){ modal.setAttribute('aria-hidden','false'); document.body.classList.add('contact-modal-open'); };
  var closeModal = function(){ modal.setAttribute('aria-hidden','true'); document.body.classList.remove('contact-modal-open'); };
  document.addEventListener('click', function(e){
    var el = e.target.closest && e.target.closest('a,button');
    if(!el) return;
    if(el.classList && el.classList.contains('button')){
      // allow mailto and external links to pass
      var href = el.getAttribute('href') || '';
      if(href.startsWith('http') || href.startsWith('mailto:')) return;
      e.preventDefault();
      openModal();
    }
  });
  // close controls
  var closeBtn = $('#contact-modal .contact-modal-close');
  var cancelBtn = $('#contact-modal .contact-cancel');
  closeBtn && closeBtn.addEventListener('click', closeModal);
  cancelBtn && cancelBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){ if(e.target === modal || e.target.classList.contains('contact-modal-backdrop')) closeModal(); });
})();
