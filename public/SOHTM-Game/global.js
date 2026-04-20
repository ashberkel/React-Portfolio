//assets
const MCChoice = localStorage.getItem("MCChoice");
let floorUnlock = false;
let floor6First = true;
let badOmenTrigger = false;
let endingTrigger = false;
let invCount = 0;
const woodCrack = new Audio("assets/WoodCrack.mp3");
const walkNoise = new Audio("assets/footSteps.wav");
const dining3Music = new Audio("assets/Ragtime_Annie.mp3");
const dining6Music = new Audio("assets/Intro_And_Tarantelle.mp3");
const pickupSound = new Audio("assets/clickSoundPick.mp3");
const useSound = new Audio("assets/clickSoundUse.mp3");
const errorSound = new Audio("assets/Error.mp3");

console.log("Your MCChoice is: " + MCChoice);
//movement logic
$(document).ready(function () {
    //movement logic
    X = 0
    Y = 0
    Z = 3
    coord = ""
    room = ``
    $(".movement, .floors").click(function () {
        ID = this.id
        if (ID === "moveRight" || ID === "moveLeft" || ID === "moveUp" || ID === "moveDown") {
            walkNoise.play();
            walkNoise.volume = .2;
        }
        if (ID == "floorB1") { Z = 0 }
        if (ID == "floor3") { Z = 3 }
        if (ID == "floor4") { Z = 4 }
        if (ID == "floor6") { Z = 6 }
        if (ID == "floorO1") { Z = 7 }
        if (ID == "moveRight") { X += 1 }
        else if (ID == "moveLeft") { X -= 1 }
        else if (ID == "moveUp") { Y += 1 }
        else if (ID == "moveDown") { Y -= 1 }
        coord = `${Z},${X},${Y}`
        switch (coord) {
            case "3,0,0":
                room = "MCRoom"
                $(".clickables, #charPen").addClass("hide");
                $(".clickables.MCRoom").removeClass("hide");
                $("#moveUp, #moveDown, #moveLeft").addClass("hide");
                $("#moveRight").toggleClass("hide");
                if (endingTrigger) {
                $("#playView").css("background-image", "url('images/rooms/MCRoomBld.jpg')");
                $('#moveRight').addClass("deleted");
                bloodDia = "…What… what is this?_This isn’t from some small cut… it’s all over the damn room. And the mirror…_“Meet me at midnight. Tell....?”_And that handwriting…it looks like…mine?_…_...what the hell is going on around here?"
                diaSplit(bloodDia, () => {
                console.log("GAME END LOADING.");
                setTimeout(() => {$("#endFade").attr("fill", "rgba(0,0,0,0.2)");}, 300);
                setTimeout(() => {$("#endFade").attr("fill", "rgba(0,0,0,0.4)");}, 600);
                setTimeout(() => {$("#endFade").attr("fill", "rgba(0,0,0,0.6)"); $('#newspaper').addClass("deleted");}, 900);
                setTimeout(() => {$("#endFade").attr("fill", "rgba(0,0,0,0.8)");}, 1200);
                setTimeout(() => {$("#endFade").attr("fill", "rgba(0,0,0,1.0)");}, 1500);
                setTimeout(() => {window.location.href = "outro.html";}, 3000);
            });}
                else {
                $("#playView").css("background-image", "url('images/rooms/MCRoom.jpg')");
                }
                break;
            case "3,1,0":
                room = "MCHall"
                $(".clickables").addClass("hide");
                $(".clickables.MCHall, #charPen").removeClass("hide");
                $("#moveDown, #moveRight").addClass("hide");
                $("#moveUp, #moveLeft").removeClass("hide");
                if (endingTrigger) {
                $("#playView").css("background-image", "url('images/rooms/MCHallBld.jpg')");
                bloodDia = "…that's not good._I might be old, but I know that door handle wasn’t covered in blood when I left."
                diaSplit(bloodDia);
                }
                else {
                $("#playView").css("background-image", "url('images/rooms/MCHall.jpg')");
                }
                break;
            case "3,1,1":
                room = "Elevator3"
                $(".clickables, #charPen").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
                $("#moveLeft").addClass("hide");
                $("#moveDown, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                break;
            case "3,1,2":
                room = "Floor3"
                $(".floors").removeClass("current");
                $("#floor3").addClass("current");
                $(".clickables").addClass("hide");
                $(".clickables.floors").removeClass("hide");
                $("#moveUp").addClass("hide");
                $("#moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Floors3-4O.jpg')");
                break;
            case "4,1,2":
                room = "Floor4"
                $(".floors").removeClass("current");
                $("#floor4").addClass("current");
                $("#moveDown").removeClass("hide");
                $(".clickables").addClass("hide");
                $(".clickables.floors").removeClass("hide");
                $("#moveUp").addClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Floors34-O.jpg')");
                dining3Music.play();
                dining3Music.volume = 0;
                break;
            case "4,1,1":
                room = "Elevator4"
                $(".clickables").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
                $("#moveDown, #moveLeft").addClass("hide");
                $("#moveRight, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                dining3Music.play();
                dining3Music.volume = .1;
                break;
            case "4,2,1":
                room = "Hall4"
                $(".clickables").addClass("hide");
                $(".clickables.Hall4").removeClass("hide");
                $("#moveRight, #moveDown, #charCapn").addClass("hide");
                $("#moveLeft, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Hallway4.jpg')");
                dining3Music.play();
                dining3Music.volume = .2;
                break;
            case "4,2,2":
                room = "Dining4Left"
                $(".clickables").addClass("hide");
                $(".clickables.Dining4Left").removeClass("hide");
                $("#moveLeft, #moveUp, #charHugh, .dining4Wall").addClass("hide");
                $("#moveRight, #moveDown, #charCapn").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Dining4Lft.jpg')");
                dining3Music.play();
                dining3Music.volume = .3;
                break;
            case "4,3,2":
                room = "Dining4Right"
                $(".clickables, #charCapn").addClass("hide");
                $(".clickables.Dining4Right, #paperScrap, #charHugh").removeClass("hide");
                $("#moveRight, #moveDown").addClass("hide");
                $("#moveLeft").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Dining4Rgt.jpg')");
                break;
            case "7,1,2":
                room = "FloorO1"
                $(".floors").removeClass("current");
                $("#floorO1").addClass("current");
                $(".clickables").addClass("hide");
                $(".clickables.floors").removeClass("hide");
                $("#moveUp, #moveRight").addClass("hide");
                $("#moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Floors34O-.jpg')");
                break;
            case "7,1,1":
                room = "ElevatorO1"
                $(".clickables").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
                $("#moveLeft, #moveDown").addClass("hide");
                $("#moveRight, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                break;
            case "7,2,1":
                room = "HallO1"
                $(".clickables").addClass("hide");
                $(".clickables.HallO1").removeClass("hide");
                $("#moveRight, #moveDown").addClass("hide");
                $("#moveLeft, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/HallO1.png')");
                break;
            case "7,2,2":
                room = "HallO1Out"
                $(".clickables").addClass("hide");
                $(".clickables.HallO1Out").removeClass("hide");
                if (badOmenTrigger) {
                    $("#charMon").removeClass("hide");
                }
                $("#moveUp, #moveLeft").addClass("hide");
                $(" #moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/HallO1Out.jpg')");
                break;
        }
        if (floorUnlock) {
            switch (coord) {
                case "0,1,2":
                    room = "FloorB1"
                    $(".floors").removeClass("current");
                    $("#floorB1").addClass("current");
                    $(".clickables, #moveRightB1").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp, #moveLeft, #crowbar").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB-346O.jpg')");
                    break;
                case "0,1,1":
                    room = "ElevatorB1"
                    $(".clickables").addClass("hide");
                    $("#elevatorB, #crowbar, #moveRightB1").removeClass("hide");
                    $("#moveDown").addClass("hide");
                    $("#moveUp").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/ElevB.jpg')");
                    break;
                case "3,1,2":
                    room = "Floor3"
                    $(".floors").removeClass("current");
                    $("#floor3").addClass("current");
                    $(".clickables").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB3-46O.jpg')");
                    break;
                case "4,1,2":
                    room = "Floor4"
                    $(".floors").removeClass("current");
                    $("#floor4").addClass("current");
                    $("#moveDown").removeClass("hide");
                    $(".clickables").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp").addClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB34-6O.jpg')");
                    dining3Music.play();
                    dining3Music.volume = 0;
                    break;
                case "6,1,2":
                    room = "Floor6"
                    $(".floors").removeClass("current");
                    $("#floor6").addClass("current");
                    $(".clickables, #charMads, #charHugh2").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp, #moveRight").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB346-O.jpg')");
                    dining6Music.play();
                    dining6Music.volume = 0;
                    break;
                case "6,1,1":
                    room = "Elevator6"
                    if (floor6First === true) {
                        firstDia = "???: Excuse me. May I see your holocard?_Carter: Knock yourself out._???: …Hm. Third Class with access up to First? You must be someone… particularly special._Carter: I’m a… friend of the captain, I guess._???: A friend of the captain. Then I suppose that makes us friends as well. Call me Mads._Please, I won't interrupt any further."
                        $("#roomFade").removeClass("hide");
                        diaSplit(firstDia);
                        floor6First = false;
                    }
                    $(".clickables, #charSci, #charPen2").addClass("hide");
                    $(".clickables.elevator, #charMads").removeClass("hide");
                    if (character[3].giveEnvelope == true) {
                        $("#charHugh2").removeClass("hide");
                    }
                    $("#moveDown").addClass("hide");
                    $("#moveLeft, #moveRight, #moveUp").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                    dining6Music.play();
                    dining6Music.volume = .3;
                    break;
                case "6,0,1":
                    room = "Dining6Lft"
                    $(".clickables, #charMads, #charHugh2, #charSci").addClass("hide");
                    if (!$('#charPen2').hasClass('deleted')) {
                        $('#charPen2').removeClass("hide");
                    }
                    $("#moveLeft, #moveUp").addClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Dining6Lft.jpg')");
                    break;
                case "6,2,1":
                    room = "Dining6Rgt"
                    $(".clickables, #charMads, #charHugh2").addClass("hide");
                    $("#charSci").removeClass("hide");
                    $("#moveRight, #moveUp").addClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Dining6Rgt.jpg')");
                    break;
                case "7,1,2":
                    room = "FloorO1"
                    $(".floors").removeClass("current");
                    $("#floorO1").addClass("current");
                    $(".clickables").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp, #moveRight").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB346O-.jpg')");
                    break;
            }
        }
        console.log("Coordinates:" + coord + " Room:" + room)
    });
});
//Clickables
$(".clickables").click(function () {
    const thisClick = this;
    let desc;
    console.log("Clickable activated:" + thisClick.id)
    for (const c of clickable) {
        if (thisClick.id === "mirror") {
            if (MCChoice === "MCCat") {
                $("#MCMirrorPic").attr("src", "images/characters/MCCat.gif");
            } else {
                $("#MCMirrorPic").attr("src", "images/characters/MCDog.gif");
            }
            desc = c.desc;
            diaSplit(desc, () => {
                // Clear the image after diaSplit finishes
                $("#MCMirrorPic").attr("src", "");
            });
            break; // stop searching after mirror
        }
        if ($(this).hasClass("inactive")) {
            desc = "Carter: Locked out. Looks like some floors are off-limits._Carter: Maybe they don't like different creaturefolk classes interacting.";
            diaSplit(desc);
            break;
        }
        if ($(this).hasClass("current")) {
            desc = "Carter: I'm already on that floor.";
            diaSplit(desc);
            break;
        }
        if (thisClick.id === c.name) {
            desc = c.desc;
            diaSplit(desc);
            break; // stop searching after match
        }
    }
});
//Character Handling
$(".characters").click(function () {
    const thisChar = this;
    console.log('Clicked on character:' + thisChar.id)
    $("#roomFade").removeClass("hide");
    for (const ch of character) {
        //Mads Envelope Give
        if (thisChar.id === "charMads" && !character[1].firstTalk && !character[2].envelopeTalk) {
            dia = "Mads: By the way… did you happen to come across a grumpy-looking ram? His name is Hugh._Carter: Maybe… not sure._Mads: Might I ask a favor? I have a letter I’ve been meaning to give him. Unfortunately, he’s been impossible to get ahold of lately._Mads: Likely because he’s avoiding me._Carter: And you want me to be your errand boy?_Mads: I assure you it won’t be for nothing. I overheard your chat with Ms. Gven._Carter:  Eavesdropping too?_Mads: It’s my job to watch for anything suspicious. I can’t help but… oversee many things._Carter: Uh-huh…_Mads: Regardless. It may interest you to know someone of interest might have… taken something._Carter:  Taken something?_Mads: Yes. Something rather important—from the senior technician’s pocket._Carter: …That’s not considered suspicious?_Mads: It is. But the senior technician was awfully rude to me the other day. And I don’t tolerate the rude._…_Mads: Regardless, you should know this person is extremely… nosy. If they knew something most don’t—and the theft ties into it…_Carter:  Right. And you think that’s a lead?_Mads: Perhaps. But that’s for you to decide, Detective._Mads: Well? I look forward to your return after you talk to Hugh."
            diaSplit(dia, () => {
                console.log("onDone working after convo about Hugh");
                console.log(typeof thisChar.addEnvelope);
                character[2].addEnvelope();
                character[2].envelopeTalk = true;
            });
            break;
        }
        //Hugh Envelope Take
        if (thisChar.id === "charHugh" && character[2].envelopeTalk) {
            console.log('Hugh was clicked with envelope!')
            dia = "Hugh: …What’s that?_Carter:  I don’t know. The First Class chauffeur, Mads, told me to give it to you._Hugh: That idiot. Making people do his damn errands… give me that._……_Hugh: Wh—who the hell does he think he is?!_Hugh: I’m about to give him a piece of my mind!"
            diaSplit(dia, () => {
                removeItem('envelope');
                character[3].giveEnvelope = true;
                $("#charHugh").addClass("deleted");
            });
            break;
        }
        //Penelope Scrap Papers
        if (thisChar.id === "charPen2" && character[character.length - 3].firstTalk) {
            console.log('Penelope was talked to with scraps!')
            dia = character[character.length - 3].diaOptions();
            diaSplit(dia, () => {
                removeItem('paperScrap');
                setTimeout(() => {addToInventory(item[3])}, 100);
                badOmenTrigger = true;
            });
            break;
        }
        //Bad Omen
        if (thisChar.id === "charMon") {
                dia = character[7].diaOptions();
                diaSplit(dia);
                console.log("BAD OMEN INCOMING")
                setTimeout(() => {
                    $("#charMon").attr("src", "images/characters/Mon2.gif");
                    $("#diaButton").addClass("hide");
                    dia = "BADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMEN"
                    diaSplit(dia);
                    errorSound.play();
                    errorSound.volume = .5;
                }, 3000);
                setTimeout(() => {
                    window.parent.badOmenAdd();
                }, 3500);
                setTimeout(() => {
                    window.parent.badOmenClear();
                    $("#charMon").addClass("deleted");
                    $("#diaButton").removeClass("hide");
                    errorSound.volume = .0;
                    badOmenTrigger = true;
                }, 11000);
                setTimeout(() => {
                    dia = "...?_Carter: Huh. Thought I saw…never mind._..._Carter: Damn—my head feels like it’s gonna split open._Carter: I don’t have the best lead yet, but… hell, maybe a nap wouldn’t kill me. Little rest might shake something loose, help me see what I’m missing."
                    diaSplit(dia);
                    badOmenTrigger = false;
                    endingTrigger = true;
                }, 11500);
                break;
            };
        if (thisChar.id === ch.name) {
            dia = ch.diaOptions();
            diaSplit(dia);
            ch.firstTalk = false;
            if (thisChar.id === "charCapn") {
                floorUnlock = true;
                $("#floorB1, #floor6").removeClass("inactive");
            }
            break; // stop searching after match
        }
    }
});
//Item Handling
$(".items").click(function processItem() {
    const thisItem = this;
    const id = thisItem.id;

    const obj = item.find(x => x.name === id);
    const crowbar = item.find(x => x.name === 'crowbar');

    if (!obj) {
        console.warn('No data object found for', id);
        return;
    }
    // Special case: paperScrap
    if (id === 'paperScrap') {
        if (crowbar && crowbar.inInv) {
            woodCrack.play();
            console.log("You DO have the crowbar.");
            diaSplit("...!_Carter: Right...well._Carter: I hope that no one important saw that. I'd rather not pay for damages because of this.");
            removeItem('crowbar');
            setTimeout(() => {addToInventory(item[2])}, 100);
            $('.dining4Wall, #charPen').addClass('deleted');
            $('#brokenWall, #charPen2').removeClass('deleted');

            item[1].inInv = false;
            item[2].inInv = true;
        } else {
            console.log("You DON'T have the crowbar.");
            diaSplit(clickable[11].desc);
        }
        return; // we're done for this click
    }
    // Normal pickup case
    if (!obj.inInv) {
        console.log("Comparing to item database:", id, " = ", obj.name);
        obj.inInv = true;
        addToInventory(obj, thisItem);
    }
});
//Inventory Adding
function addToInventory(obj, thisItem) {
    invCount = 0;
    $(".invItems").each(function (index) {
        if (!$(this).hasClass("hide")) {
            invCount += 1;
            console.log("Count is", invCount);
            $(thisItem).addClass("hide");
            $("#" + invCount).append(
            "<img width='70px' src='images/objects/" + obj.name + ".png' />"
            );
            $("#" + invCount).addClass(obj.name);
            $("#" + invCount).addClass("filled");
            pickupSound.play();
            console.log("Added:", obj, "to inventory");
            return false;
        }
    })};
//Inventory remove each slot
function removeItem(id, onDone) {
    var id
    $(".invItems").each(function () {
        if ($(this).hasClass("filled") && $(this).hasClass(id)) {
            $(this).empty();
            $(this).removeClass(id);
            $(this).removeClass("filled");
            useSound.play();
            if (onDone) onDone();
            console.log("Removed:", id, "to inventory");
            return false;
        }
    }
    )
};
//Inventory desc click
     $(".invItems").click(function () {
        const thisPic = this;
        console.log("Clicked on:", thisPic.id);
        item.forEach(i =>
            {if ($(thisPic).hasClass(i.name)) {
                desc = i.desc;
                diaClick(desc);}
            })
     });
//Dialogue hover
    function diaClick(dia) {
        document.getElementById('diaBox').innerHTML = dia;
        const clear = () => {
        document.getElementById('diaBox').innerHTML = "";}
        const myTimeout = setTimeout(clear, 2000);
        }
//Dialogue splitting
function diaSplit(dia, onDone) {
    const splitUp = dia.split("_");
    var n = 0;
    diaButton.style.display = "inline";
    document.getElementById('diaBox').innerHTML = splitUp[n];
    $('#moveIcons').addClass("hide");
    $('.characters, .items').addClass("disabled");
    $("#diaButton").off("click");
    $("#diaButton").click(function () {
        n += 1;
        if (splitUp[n] != undefined) {
            document.getElementById('diaBox').innerHTML = splitUp[n];
        }
        else {
            document.getElementById('diaBox').innerHTML = "";
            diaButton.style.display = "none";
            $('#moveIcons').removeClass("hide");
            $('.characters, .items').removeClass("disabled");
            $("#roomFade").addClass("hide");
            n = 0;
            if (onDone) onDone();
        }
        console.log(`Current n count is` + n);
    })
}