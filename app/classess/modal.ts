
export class Modal{
    private readonly id: string;

    public static modals: any[] = [];

    constructor(id = null){

        const findModal = Modal.modals.find(x => x.id == id)

        if(findModal){
            Modal.removeById(id);
        }

        Modal.modals.push(this);
        this.id = id || String((Math.random() + Modal.modals.length));
    }

    public open(template: string):void{
        const dirWrap = document.createElement("div")
        dirWrap.innerHTML = template;
        dirWrap.id = this.id;
        dirWrap.setAttribute('modal-id', this.id)
        dirWrap.classList.add("modal-element");
        dirWrap.addEventListener("click", this.closeModalHandler);
        document.body.appendChild(dirWrap);
    }

    public remove(){
        const el = document.getElementById(this.id) as HTMLElement;
        if (el){
            el.removeEventListener('click', this.closeModalHandler)
            el.parentNode.removeChild(el);
        }
    }

    public static removeById(id = null): void{
        let modalId = id;
        const findEl = Modal.modals.find(x => x.id === modalId);
        if (findEl){
            findEl.remove();
            Modal.modals = Modal.modals.filter((el) => el.id !== modalId)
        }else{
            if (Array.isArray(Modal.modals)){
                const lastEl = Modal.modals.pop();
                    if(lastEl){
                        lastEl.remove();
                    }
            }
        }
    }

    public static removeAll(){
        if (Array.isArray(Modal.modals)){
            Modal.modals.forEach((el) => {
                Modal.removeById(el.id);
            })
        }
    }

    private closeModalHandler = (ev: Event) => { 
        const target = ev.target as HTMLElement;
            if (target.classList.contains('close-modal')){    
                this.remove();    
            }
        }

}