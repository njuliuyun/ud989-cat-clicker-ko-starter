var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/2.jpg");
    
    this.increamentCount = function() {
        this.clickCount(this.clickCount() + 1);
    };
    
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) return "Newborn";
        else if (this.clickCount() < 20) return "Infant";
        else if (this.clickCount() < 30) return "Teen";
        else return "Adult";
    }, this);
    
    this.nickNames = ko.observableArray([
        {name: "TT"},
        {name: "Tad"},
        {name: "Cuty"}
    ]);
}
ko.applyBindings(new ViewModel());
