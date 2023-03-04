import { getTourTemplate } from "..//..//templates/tours";
import {openModal} from "@services/modal/modalService";
import { ITours } from "models/tours";

export function initToursDivElements(data: ITours[]):void {

    if (Array.isArray(data)) {
      const rootElement: Element = document.querySelector('.main-app');
      const tourWrap = document.createElement('div');
  
      tourWrap.classList.add('tour-wrap');
  
      // init click for modal
      initTourElemListener(tourWrap);
  
      let rootElementData = '';
      data.forEach((el, i) => {
        rootElementData += getTourTemplate(el, i);
      });
  
      tourWrap.innerHTML = rootElementData;
      rootElement.appendChild(tourWrap) ;
    }
  }

  export function initTourElemListener(tourWrap: HTMLDivElement):void {
    tourWrap.addEventListener('click', (ev) => {
      const targetItem = <HTMLElement> ev.target;
      const parentItem = <HTMLElement> targetItem?.parentNode;
      let realTarget: { getAttribute: (arg0: string) => any; };
  
      if (targetItem.hasAttribute('data-tour-item-index')) {
        realTarget = targetItem;
      } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
        realTarget = parentItem;
      }
  
      if (realTarget) {
        const dataIndex = realTarget.getAttribute('data-tour-item-index');
        openModal('order', Number(dataIndex));
      }
    });
  }