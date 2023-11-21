import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["menu","mobilemenu","menuplaceholder"];
    connect(){
        this.menuplaceholderTarget.classList.add("hidden"); 
        this.mobilemenuTarget.classList.remove("hidden");
    
    }
    toggle()
    {
        if(this.menuTarget.classList.contains("hidden"))
        {
            this.menuTarget.classList.remove("hidden");
        }
        else
        {
            this.menuTarget.classList.add("hidden");
        }
    }
}