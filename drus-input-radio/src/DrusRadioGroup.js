export class DrusRadioGroup {

    // create group

    static createGroup(name) {
        this.groups = this.groups || {};
        this.groups[name] = this.groups[name] || [];
    }

    static getSelected(name) {
        return this.groups[name].filter(radio => radio.checked);
    }



    // sync group
    static syncGroup(name, radio) {
        const radios = this.groups[name];
        radios.filter
    }



    // add radio to group
    static addRadio(name, radio) {
        const group = this.groups[name];
        group.push(radio);
    }


}
