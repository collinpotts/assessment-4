const openingList = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A golden egg of opportunity falls into your lap this month.", "A lifetime of happiness lies ahead of you."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    addOpening: (req, res) => {
        for(let i = 0; i < openingList.length; i++) {
            if(openingList[i].openingName === req.body.openingName) {
                res.status(400).send("Opening is already on the list");
                return;
            }
        }
            console.log("Adding opening to the list...");
            console.log(req.body.openingName);
            openingList.push(req.body);
           
            // let list = ''
            // for(let i = 0; i < openingList.length; i++){
            //     list += `${openingList[i].openingName}, ` 
            // }
            console.log("==========");
            res.status(200).send(openingList);
            console.log("The current list is:");
            console.log(openingList);
        
    },

    delOpening: (req, res) => {
        console.log(req.params);
        for(let i = 0; i < openingList.length; i++) {
            if(openingList[i].openingName === req.query.openingName) {
                console.log("Deleting Opening off the list...");
                openingList.splice(i,1);

                // let list = ''
                // for(let i = 0; i < openingList.length; i++){
                //     list += `${openingList[i].openingName}, ` 
                // }
                res.status(200).send(openingList);
                console.log("The current list is:");
                console.log(openingList);
                return;
            }
        }
        res.status(400).send("Opening is not on the list");
            
    },

    editOpening: (req, res) => {
        for(let i = 0; i < openingList.length; i++) {
            if(openingList[i].openingName === req.body.data.openingName) {
                openingList[i].openingName = req.body.data.newOpeningName;
                console.log("Changed opening in the list...");

                // let list = ''
                // for(let i = 0; i < openingList.length; i++){
                //     list += `${openingList[i].openingName}, ` 
                // }
                res.status(200).send(openingList);
                console.log("The current list is:");
                console.log(openingList);
                return;
            }
        }
        res.status(400).send("Opening is not on the list");
            
    }


}