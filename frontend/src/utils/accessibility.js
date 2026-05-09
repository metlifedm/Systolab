export class ModalManager {
  constructor(modalRef) {
    this.modalRef = modalRef;
    this.previouslyFocusedElement = null;
    this.focusableElements = [];
  }

  open() {
    this.previouslyFocusedElement = document.activeElement;
    this.lockScroll();
    this.inertBackground();
    this.focusTrap();
  }

  close() {
    this.unlockScroll();
    this.removeInert();
    this.restoreFocus();
  }

  lockScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  unlockScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  inertBackground() {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    [main, nav, footer].forEach(el => {
      if (el) el.setAttribute('inert', '');
    });
  }

  removeInert() {
    const elements = document.querySelectorAll('[inert]');
    elements.forEach(el => el.removeAttribute('inert'));
  }

  focusTrap() {
    if (!this.modalRef.current) return;
    this.focusableElements = Array.from(
      this.modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
    if (this.focusableElements.length > 0) {
      this.focusableElements[0].focus();
    }
  }

  restoreFocus() {
    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  }

  handleKeyDown(e) {
    if (e.key !== 'Tab') return;
    const first = this.focusableElements[0];
    const last = this.focusableElements[this.focusableElements.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

export const skipToMainContent = () => {
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.focus();
    mainContent.scrollIntoView();
  }
};