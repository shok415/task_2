import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {IVipTicket, TicketType, ITicket} from "../../models/ticket/ticket";
import {getTicketById, postTicketData} from "@rest/tickets";


/* Общие методы используются для вставки текста в header   footer*/
let ticketPostInstance: any;
/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
export function initHeaderTitle(ticketName: string, selector: string):void {
    const headerElement= document.querySelector('header');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.textContent = ticketName;
    }
}

export function initFooterTitle(ticketName: string, selector: string):void {
    const headerElement = document.querySelector('footer');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.textContent = ticketName;
    }
}

export function initTicketInfo(ticket: TicketType | IVipTicket) {
    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType: string;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate: string;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

export function initUserData():{ [x: string]: string; } {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj: { [x: string]: string; };
        userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
        });
    
        console.log('userInfoObj',userInfoObj)
        return userInfoObj;
    }

    export function initPostData(data: any) {
        initUserData();
        postTicketData(data).then((data) => {
            if (data.success) {
    
            }
        })
    }

    export function registerConfirmButton(): void {
        const targetEl = document.getElementById('accept-order-button');
        if (targetEl) {
            targetEl.addEventListener('click', () => {
                initPostData(ticketPostInstance);
            });
        }
    }