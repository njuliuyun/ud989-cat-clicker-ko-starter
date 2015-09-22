var initialCats = [
    {
        name: "Tabby",
        clickCount: 0,
        imgSrc: "img/22252709_010df3379e_z.jpg",
        nickNames: ["TT", "Tad", "Mr. T"]
    },
    {
        name: "Tiger",
        clickCount: 0,
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nickNames: ["Tiger"]
    },
    {
        name: "Scaridy",
        clickCount: 0,
        imgSrc: "img/4154543904_6e2428c421_z.jpg",
        nickNames: ["Casper"]
    },
    {
        name: "Shadow",
        clickCount: 0,
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        nickNames: ["Shooby"]
    },
    {
        name: "Sleepy",
        clickCount: 0,
        imgSrc: "img/9648464288_2516b35537_z.jpg",
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
