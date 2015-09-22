var initialCats = [
    {
        name: "Tabby",
        clickCount: 0,
        imgSrc: "img/1.jpg",
        nickNames: ["TT", "Tad", "Mr. T"]
    },
    {
        name: "Tiger",
        clickCount: 0,
        imgSrc: "img/2.jpg",
        nickNames: ["Tiger"]
    },
    {
        name: "Scaridy",
        clickCount: 0,
        imgSrc: "img/4.jpg",
        nickNames: ["Casper"]
    },
    {
        name: "Shadow",
        clickCount: 0,
        imgSrc: "img/3.jpg",
        nickNames: ["Shooby"]
    },
    {
        name: "Sleepy",
        clickCount: 0,
        imgSrc: "img/5.jpg",
        nickNames: ["Zzzz"]
    },
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observableArray(data.nickNames);
    
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) return "Newborn";
        else if (this.clickCount() < 20) return "Infant";
        else if (this.clickCount() < 30) return "Teen";
        else return "Adult";
    }, this);
    
}

var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([]);
    
    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });
    
    this.currentCat = ko.observable(this.catList()[0]);
    
    this.increamentCount = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    
    this.setCurrCat = function(cat) { 
        self.currentCat(cat);
    };
}
ko.applyBindings(new ViewModel());
