import { clearInput } from '../../shared/clearInput';
import { closePopup } from '../../shared/closePopup';

export function clearInputValue(): void {
  const buttonCancel = document.querySelector('.cancel__input');
  buttonCancel?.addEventListener('click', () => {
    clearInput();
    closePopup(document.querySelector('.popup__registration'));
  });
}
